import * as stylex from '@stylexjs/stylex';
import type { ReactNode } from 'react';
import Column from './Column';
import { text } from '../styles/tokens.stylex';

type Props = {
  id: string;
  heading: string;
  children: ReactNode;
};

export default function Section({ id, heading, children }: Props) {
  const headingId = `${id}-heading`;
  return (
    <Column as="section" id={id} labelledBy={headingId} xstyle={styles.section}>
      <h2 id={headingId} {...stylex.props(styles.heading)}>
        {heading}
      </h2>
      {children}
    </Column>
  );
}

const styles = stylex.create({
  section: {
    lineHeight: 1.55,
    paddingBlock: 'clamp(2rem,6vw,4rem)',
  },
  heading: {
    fontSize: text.lede,
    fontWeight: 800,
    lineHeight: 1.2,
    margin: 0,
    marginBottom: '1.5rem',
  },
});
