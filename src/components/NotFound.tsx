import * as stylex from '@stylexjs/stylex';
import Column from './Column';
import Link from './Link';
import { text } from '../styles/tokens.stylex';

export default function NotFound() {
  return (
    <Column as="section" xstyle={styles.section}>
      <h1 {...stylex.props(styles.heading)}>Page not found</h1>
      <p {...stylex.props(styles.body)}>There's no page at this address.</p>
      <Link href="/">Go to the home page</Link>
    </Column>
  );
}

const styles = stylex.create({
  section: {
    paddingBlock: 'clamp(3rem,10vw,8rem)',
  },
  heading: {
    fontSize: text.lede,
    fontWeight: 800,
    lineHeight: 1.2,
    margin: 0,
    marginBottom: '1rem',
  },
  body: {
    lineHeight: 1.5,
    margin: 0,
    marginBottom: '1.5rem',
  },
});
