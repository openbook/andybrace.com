import * as stylex from '@stylexjs/stylex';
import type { ReactNode } from 'react';
import { colors, fonts, space, text } from '../styles/tokens.stylex';

type Props = {
  as?: 'div' | 'header' | 'section' | 'footer';
  id?: string;
  labelledBy?: string;
  xstyle?: stylex.StyleXStyles;
  children: ReactNode;
};

// The page's single column: type, colour, side padding and reading width.
export default function Column({ as: Tag = 'div', id, labelledBy, xstyle, children }: Props) {
  return (
    <Tag id={id} aria-labelledby={labelledBy} {...stylex.props(styles.column, xstyle)}>
      {children}
    </Tag>
  );
}

const styles = stylex.create({
  column: {
    fontFamily: fonts.sans,
    fontSize: text.body,
    color: colors.text,
    paddingInline: space.gutter,
    maxWidth: `calc(${space.measure} + 2 * ${space.gutter})`,
  },
});
