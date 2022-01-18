// test-utils.jsx
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// Import your own reducer
import userReducer from '../stores/userSlice';

function render(
  ui: any,
  {
    preloadedState,
    store = configureStore({ reducer: { user: userReducer }, preloadedState }),
    ...renderOptions
  }: { preloadedState?: any; store?: any } = {}
) {
  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
