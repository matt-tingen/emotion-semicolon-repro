import { cache, css } from '@emotion/css';
import { CacheProvider } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import ReactDOM from 'react-dom';

const Flex = styled('div')(
  css({
    gap: 8,
    flexWrap: 'wrap',
  }),
);

const flexStyle = css({ display: 'flex' });

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
    <Flex className={flexStyle}>
      {items.map(({ name }) => (
        <div key={name}>{name}</div>
      ))}
    </Flex>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <CacheProvider value={cache}>
    <App />
  </CacheProvider>,
  rootElement,
);
