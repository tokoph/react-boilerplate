import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../components/App';

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
  }
}
