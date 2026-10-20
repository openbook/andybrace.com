import * as stylex from '@stylexjs/stylex';
import type { ReactNode } from 'react';
import type { Item } from '../copy';
import Column from './Column';
import { text } from '../styles/tokens.stylex';

type Props = {
  id: string;
  heading: string;
  paragraphs?: string[];
  items?: Item[];
  children?: ReactNode;
};

export default function Section({ id, heading, paragraphs = [], items = [], children }: Props) {
  const headingId = `${id}-heading`;
  return (
    <Column as="section" id={id} labelledBy={headingId} xstyle={styles.section}>
      <h2 id={headingId} {...stylex.props(styles.heading)}>
        {heading}
      </h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} {...stylex.props(styles.paragraph)}>
          {paragraph}
        </p>
      ))}
      {items.length > 0 && (
        <ul {...stylex.props(styles.list)}>
          {items.map((item) => (
            <li key={item.lead}>
              <strong>{item.lead}</strong> {item.text}
            </li>
          ))}
        </ul>
      )}
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
  paragraph: {
    margin: 0,
  },
  list: {
    margin: 0,
    paddingInlineStart: '1.25rem',
    display: 'grid',
    gap: '1rem',
  },
});
