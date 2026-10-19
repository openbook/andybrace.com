#!/usr/bin/env bash
# Reads paths on stdin and fails if any isn't matched by .commit-allowlist.
# Used by the pre-commit guard (staged paths) and CI (every tracked path).
set -euo pipefail

root=$(git rev-parse --show-toplevel)
patterns=$(grep -vE '^\s*(#|$)' "$root/.commit-allowlist")
failed=0

while IFS= read -r path; do
  [ -z "$path" ] && continue
  ok=0
  while IFS= read -r pattern; do
    # shellcheck disable=SC2254
    case "$path" in $pattern) ok=1; break ;; esac
  done <<< "$patterns"
  if [ "$ok" = 0 ]; then
    printf '\033[31m✗ Path not in .commit-allowlist: %s\033[0m\n' "$path" >&2
    failed=1
  fi
done

exit "$failed"
