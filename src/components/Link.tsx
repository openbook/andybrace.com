import * as stylex from '@stylexjs/stylex';
import type { ReactNode } from 'react';
import { colors } from '../styles/tokens.stylex';

type Props = {
  href: string;
  children: ReactNode;
};

// Near-black text with a cobalt underline (decision 0013), and a visible focus outline.
export default function Link({ href, children }: Props) {
  return (
    <a href={href} {...stylex.props(styles.link)}>
      {children}
    </a>
  );
}

const styles = stylex.create({
  link: {
    fontWeight: 700,
    color: 'inherit',
    // Long addresses wrap rather than force a horizontal scroll at 320px.
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
