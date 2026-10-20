import * as stylex from '@stylexjs/stylex';
import { colors, fonts, space, text } from '../styles/tokens.stylex';

type Props = {
  email: string;
  linkedInUrl: string;
  gitHubUrl: string;
};

export default function Contact({ email, linkedInUrl, gitHubUrl }: Props) {
  return (
    <section id="contact" aria-labelledby="contact-heading" {...stylex.props(styles.section)}>
      <h2 id="contact-heading" {...stylex.props(styles.heading)}>
        Get in touch
      </h2>
      <ul {...stylex.props(styles.list)}>
        <li>
          <a href={`mailto:${email}`} {...stylex.props(styles.link)}>
            {email}
          </a>
        </li>
        <li>
          <a href={linkedInUrl} {...stylex.props(styles.link)}>
            LinkedIn
          </a>
        </li>
        <li>
          <a href={gitHubUrl} {...stylex.props(styles.link)}>
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}

const styles = stylex.create({
  section: {
    fontFamily: fonts.sans,
    color: colors.text,
    paddingBlock: 'clamp(2rem,6vw,4rem)',
    paddingInline: space.gutter,
    maxWidth: `calc(${space.measure} + 2 * ${space.gutter})`,
  },
  heading: {
    fontSize: text.lede,
    fontWeight: 800,
    lineHeight: 1.2,
    margin: 0,
    marginBottom: '1.5rem',
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'grid',
    gap: '1rem',
    fontSize: text.body,
  },
  link: {
    fontWeight: 700,
    color: 'inherit',
    // Long email addresses wrap rather than force a horizontal scroll at 320px.
    overflowWrap: 'anywhere',
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
