import * as stylex from '@stylexjs/stylex';
import { colors, fonts, space, text } from '../styles/tokens.stylex';

type Props = {
  name: string;
  oneLiner: string;
};

export default function Hero({ name, oneLiner }: Props) {
  return (
    <header {...stylex.props(styles.hero)}>
      <h1 {...stylex.props(styles.name)}>{name}</h1>
      <p {...stylex.props(styles.lede)}>{oneLiner}</p>
      <a href="#contact" {...stylex.props(styles.link)}>
        Get in touch
      </a>
    </header>
  );
}

const styles = stylex.create({
  hero: {
    fontFamily: fonts.sans,
    color: colors.text,
    paddingBlock: 'clamp(3rem,10vw,8rem)',
    paddingInline: space.gutter,
    maxWidth: `calc(${space.measure} + 2 * ${space.gutter})`,
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
  link: {
    fontSize: text.body,
    fontWeight: 700,
    color: 'inherit',
    textDecorationColor: colors.accent,
    textDecorationThickness: '0.18em',
    textUnderlineOffset: '0.2em',
    outline: {
      default: 'none',
      ':focus-visible': `3px solid ${colors.accent}`,
    },
    outlineOffset: '4px',
  },
});
