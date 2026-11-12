import Link from './Link';
import Section from './Section';

export default function WorkingWithAI() {
  return (
    <Section id="ai" heading="How I work with AI">
      <p>
        I've built with AI for about 18 months, including in production. I know where it's strong
        and where it needs checking. I'm specific about what I ask it to do, and I check what comes
        back. I keep it safe: secrets and client data out of reach, agents limited in what they can
        do and run in containers, automated security and standards checks on their output, and your
        own AI policy followed. Using AI like this helps me deliver faster.
      </p>
      <p>
        I've completed Matt Pocock's{' '}
        <Link href="https://www.aihero.dev/workshops/ai-coding-crash-course">
          AI Coding Crash Course
        </Link>
        , and I'm currently taking his{' '}
        <Link href="https://www.aihero.dev/cohorts/software-factories-for-real-engineers-xdy1m">
          Software Factories for Real Engineers
        </Link>{' '}
        cohort.
      </p>
    </Section>
  );
}
