import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line

import createStore from './store/createStore';
import Root from './containers/Root';

import './polyfills';
import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  let rootEl = document.getElementById('my-app');

  if (!rootEl) {
    rootEl = document.createElement('div');
    rootEl.id = 'my-app';
    document.body.appendChild(rootEl);
  }

  if (rootEl) {
    const store = createStore();

    ReactDOM.render(
      <AppContainer>
        <Root
          store={store}
        />
      </AppContainer>,
      rootEl,
    );

    if (module.hot) {
      module.hot.accept('./containers/Root', () => {
        const RootContainer = require('./containers/Root').default; // eslint-disable-line global-require

        ReactDOM.render(
          <AppContainer>
            <RootContainer
              store={store}
            />
          </AppContainer>,
          rootEl,
        );
      });
    }
  }
});
