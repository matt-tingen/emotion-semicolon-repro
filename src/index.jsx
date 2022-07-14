import { cache, css, cx } from '@emotion/css';
import { CacheProvider } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import ReactDOM from 'react-dom';

const Container = styled('div')(
  css({
    gap: 8,
    flexWrap: 'wrap',
  }),
);

const Stack = ({ component: Component, direction, children }) => {
  const flexStyle = css(
    { display: 'flex' },
    direction && {
      flexDirection: direction,
    },
  );

  return <Component className={cx(flexStyle)}>{children}</Component>;
};

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
    <Stack component={Container}>
      {items.map(({ name }) => (
        <div key={name}>{name}</div>
      ))}
    </Stack>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <CacheProvider value={cache}>
    <App />
  </CacheProvider>,
  rootElement,
);
