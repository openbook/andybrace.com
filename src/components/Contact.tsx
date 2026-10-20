import * as stylex from '@stylexjs/stylex';
import Section from './Section';
import Link from './Link';

type Props = {
  email: string;
  linkedInUrl: string;
  gitHubUrl: string;
};

export default function Contact({ email, linkedInUrl, gitHubUrl }: Props) {
  return (
    <Section id="contact" heading="Get in touch">
      <ul {...stylex.props(styles.list)}>
        <li>
          <Link href={`mailto:${email}`}>{email}</Link>
        </li>
        <li>
          <Link href={linkedInUrl}>LinkedIn</Link>
        </li>
        <li>
          <Link href={gitHubUrl}>GitHub</Link>
        </li>
      </ul>
    </Section>
  );
}

const styles = stylex.create({
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'grid',
    gap: '1rem',
  },
});
