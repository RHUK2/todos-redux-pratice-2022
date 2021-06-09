import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from './GlobalStyles';
import store from 'store';

import Home from 'pages/Home';

function App() {
  return (
    <Provider store={store}>
      <Home />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
