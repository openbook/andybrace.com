import * as stylex from '@stylexjs/stylex';
import type { ReactNode } from 'react';
import { colors } from '../styles/tokens.stylex';

type Props = {
  href: string;
  children: ReactNode;
};

// The arrow says where a link goes: down the page, to another site, or elsewhere on this one.
// Email links need none, since the address says what they do.
function arrowFor(href: string) {
  if (href.startsWith('mailto:')) return null;
  if (href.startsWith('#')) return '↓';
  if (/^https?:/.test(href)) return '↗';
  return '→';
}

// Near-black text with a cobalt underline (decision 0013), and a visible focus outline.
export default function Link({ href, children }: Props) {
  const arrow = arrowFor(href);
  return (
    <a href={href} {...stylex.props(styles.link)}>
      {children}
      {arrow && (
        // Decorative: the link text already says where it goes.
        <span aria-hidden="true">
          {/* A non-breaking space keeps the arrow on the same line as the text. */}
          {'\u00a0'}
          {arrow}
        </span>
      )}
    </a>
  );
}

const styles = stylex.create({
  // The underline is a cobalt background strip. On hover and keyboard focus it fills the link,
  // with page-coloured text on top (about 5.8:1). Cloned per line so wrapped links fill too.
  link: {
    fontWeight: 700,
    color: {
      default: 'inherit',
      ':hover': colors.bg,
      ':focus-visible': colors.bg,
    },
    // Long addresses wrap rather than force a horizontal scroll at 320px.
    overflowWrap: 'anywhere',
    textDecoration: 'none',
    backgroundImage: `linear-gradient(${colors.accent}, ${colors.accent})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 100%',
    backgroundSize: {
      default: '100% 0.18em',
      ':hover': '100% 100%',
      ':focus-visible': '100% 100%',
    },
    paddingBottom: '0.1em',
    paddingInline: '0.1em',
    marginInline: '-0.1em',
    boxDecorationBreak: 'clone',
    transition: {
      default: 'background-size 200ms ease-out, color 200ms ease-out',
      '@media (prefers-reduced-motion: reduce)': 'none',
    },
    outline: {
      default: 'none',
      ':focus-visible': `3px solid ${colors.accent}`,
    },
    outlineOffset: '4px',
  },
});
