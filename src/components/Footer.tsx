import * as stylex from '@stylexjs/stylex';
import Column from './Column';
import { text } from '../styles/tokens.stylex';

export default function Footer() {
  return (
    <Column as="footer" xstyle={styles.footer}>
      <p {...stylex.props(styles.note)}>
        This site sets no cookies. Cloudflare hosts it and logs each request, including the IP
        address. I see only aggregate traffic figures.
      </p>
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
