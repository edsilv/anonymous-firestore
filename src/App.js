import React from 'react';
import { Provider } from 'react-redux';
import AuthLoading from './AuthLoading';
import store from './store';

export default () => (
  <Provider store={store}>
    <AuthLoading />
  </Provider>
);
