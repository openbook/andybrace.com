import * as stylex from '@stylexjs/stylex';
import Column from './Column';
import { text } from '../styles/tokens.stylex';

type Props = {
  privacyNote: string;
};

export default function Footer({ privacyNote }: Props) {
  return (
    <Column as="footer" xstyle={styles.footer}>
      <p {...stylex.props(styles.note)}>{privacyNote}</p>
    </Column>
  );
}

const styles = stylex.create({
  footer: {
    paddingBlock: '3rem',
  },
  note: {
    fontSize: text.small,
    lineHeight: 1.5,
    margin: 0,
  },
});
