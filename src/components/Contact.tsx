import * as stylex from '@stylexjs/stylex';
import Section from './Section';
import Link from './Link';

export default function Contact() {
  return (
    <Section id="contact" heading="Get in touch">
      <ul {...stylex.props(styles.list)}>
        <li>
          <Link href="mailto:contact@openbook.uk.com">contact@openbook.uk.com</Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/andrewbrace">LinkedIn</Link>
        </li>
        <li>
          <Link href="https://github.com/openbook">GitHub</Link>
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
