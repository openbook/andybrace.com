import * as stylex from '@stylexjs/stylex';
import { colors, fonts, space, text } from '../styles/tokens.stylex';

type Props = {
  privacyNote: string;
};

export default function Footer({ privacyNote }: Props) {
  return (
    <footer {...stylex.props(styles.footer)}>
      <p {...stylex.props(styles.note)}>{privacyNote}</p>
    </footer>
  );
}

const styles = stylex.create({
  footer: {
    fontFamily: fonts.sans,
    color: colors.text,
    paddingBlock: '3rem',
    paddingInline: space.gutter,
    maxWidth: `calc(${space.measure} + 2 * ${space.gutter})`,
  },
  note: {
    fontSize: text.small,
    lineHeight: 1.5,
    margin: 0,
  },
});
