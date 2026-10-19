import * as stylex from '@stylexjs/stylex';
import { colors, fonts, space, text } from '../styles/tokens.stylex';

export default function NotFound() {
  return (
    <section {...stylex.props(styles.section)}>
      <h1 {...stylex.props(styles.heading)}>Page not found</h1>
      <p {...stylex.props(styles.body)}>There's no page at this address.</p>
      <a href="/" {...stylex.props(styles.link)}>
        Go to the home page
      </a>
    </section>
  );
}

const styles = stylex.create({
  section: {
    fontFamily: fonts.sans,
    color: colors.text,
    paddingBlock: 'clamp(3rem,10vw,8rem)',
    paddingInline: space.gutter,
    maxWidth: `calc(${space.measure} + 2 * ${space.gutter})`,
  },
  heading: {
    fontSize: text.lede,
    fontWeight: 800,
    lineHeight: 1.2,
    margin: 0,
    marginBottom: '1rem',
  },
  body: {
    fontSize: text.body,
    lineHeight: 1.5,
    margin: 0,
    marginBottom: '1.5rem',
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
