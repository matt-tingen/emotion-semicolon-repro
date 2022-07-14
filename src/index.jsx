import { cache, css } from '@emotion/css';
import { CacheProvider } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { createRoot } from 'react-dom/client';

const flexClass = css({
  display: 'flex',
  gap: 8,
});
const wrapClass = css({ flexWrap: 'wrap' });

const Flex = styled('div')(flexClass);

const items = [
  { name: 'One' },
  { name: 'Two' },
  { name: 'Three' },
  { name: 'Four' },
  { name: 'Five' },
  { name: 'Six' },
  { name: 'Seven' },
  { name: 'Eight' },
  { name: 'Nine' },
  { name: 'Ten' },
  { name: 'Eleven' },
  { name: 'Twelve' },
  { name: 'Thirteen' },
  { name: 'Fourteen' },
  { name: 'Fifteen' },
];

function App() {
  return (
    <Flex className={wrapClass}>
      {items.map(({ name }) => (
        <div key={name}>{name}</div>
      ))}
    </Flex>
  );
}

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <CacheProvider value={cache}>
    <App />
  </CacheProvider>,
);
