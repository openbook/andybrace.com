// PreToolUse hook for Claude Code. Blocks agent actions that would skip or weaken
// the commit guard, publish anything, or read the private denylist.
// Exit code 2 blocks the tool call and shows the message to the agent.
// It matches on the command text, so a determined workaround (eval, base64) could
// still get past it. The pre-commit hook and CI are the real checks.
import { readFileSync } from 'node:fs';

const { tool_name: tool, tool_input: input = {} } = JSON.parse(readFileSync(0, 'utf8'));

const block = (message) => {
  process.stderr.write(`Blocked by .claude/hooks/guard.mjs: ${message}\n`);
  process.exit(2);
};

const PRIVATE = /(^|\/)\.private(\/|$)/;

if (tool !== 'Bash') {
  const target = [input.file_path, input.path, input.pattern].filter(Boolean).join(' ');
  if (PRIVATE.test(target)) block('The private denylist is off limits to agents.');
  process.exit(0);
}

const command = input.command ?? '';
if (PRIVATE.test(command)) block('The private denylist is off limits to agents.');

// Check each command in a chain separately, so text that only mentions git
// (a commit message, most heredoc text) doesn't trigger the git rules. A heredoc line
// that itself starts with `git` still counts; write file content with the Write tool.
const segments = command.split(/\n|;|&&|\|\||\|/).map((s) => s.trim());
const runs = (name, s) => new RegExp(`^(\\w+=\\S*\\s+)*${name}\\b`).test(s);

for (const s of segments) {
  if (runs('git', s)) {
    if (/--no-verify|\bcommit\b.*\s-[a-zA-Z]*n[a-zA-Z]*(\s|$)/.test(s.replace(/(["']).*?\1/g, '')))
      block('Commits must go through the pre-commit guard. Fix what it reports instead.');
    if (/hooksPath/.test(s)) block("Don't change or bypass the git hooks.");
    if (/\bpush\b/.test(s)) block('Pushing is for a human. Stop and ask.');
  }
  if (runs('gh', s) && /\b(pr|release|repo)\s+(create|merge|edit|delete)\b/.test(s))
    block('Publishing on GitHub is for a human. Stop and ask.');
}
