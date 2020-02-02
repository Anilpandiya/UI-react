import React from 'react';
import { Provider } from 'react-redux';
import SidePanel from './SidePanel';
import Dashboard from './Dashboard';
import { store } from '../store/index';

import '../styles.scss';

function Main() {
  return (
    <div>
      <Provider store={store}>
        <SidePanel />
        <Dashboard />
      </Provider>
    </div>
  );
}

export default Main;
