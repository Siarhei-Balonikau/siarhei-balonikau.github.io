import React from 'react';
import { hydrate } from 'react-dom';
import App from './containers/App/App';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './store.js';
import styles from './styles.scss';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore(window.PRELOADED_STATE);

delete window.PRELOADED_STATE;

const render = Component => {
  hydrate(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./containers/App/App', () => {
    render(App);
  })
}