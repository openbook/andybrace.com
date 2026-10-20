import * as stylex from '@stylexjs/stylex';
import Column from './Column';
import Link from './Link';
import { text } from '../styles/tokens.stylex';

type Props = {
  name: string;
  oneLiner: string;
};

export default function Hero({ name, oneLiner }: Props) {
  return (
    <Column as="header" xstyle={styles.hero}>
      <h1 {...stylex.props(styles.name)}>{name}</h1>
      <p {...stylex.props(styles.lede)}>{oneLiner}</p>
      <Link href="#contact">Get in touch</Link>
    </Column>
  );
}

const styles = stylex.create({
  hero: {
    paddingBlock: 'clamp(3rem,10vw,8rem)',
  },
  name: {
    fontSize: text.display,
    fontWeight: 800,
    lineHeight: 1,
    letterSpacing: '-0.02em',
    margin: 0,
    marginBottom: '1.5rem',
  },
  lede: {
    fontSize: text.lede,
    fontWeight: 500,
    lineHeight: 1.35,
    margin: 0,
    marginBottom: '2rem',
  },
});
