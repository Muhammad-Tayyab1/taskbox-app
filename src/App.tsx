import React from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';

import InboxScreen from './InboxScreen/InboxScreen';

import './index.css';
function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}
export default App;