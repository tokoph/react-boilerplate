import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import counterActions from '../actions/counter';

class App extends React.Component {

  onDownClick = () => {
    this.props.decrementCounter(1);
  }

  onUpClick = () => {
    this.props.incrementCounter(1);
  }

  render() {
    return (
      <div>
        <button onClick={this.onDownClick}>Down</button>
        <span>{ this.props.counter }</span>
        <button onClick={this.onUpClick}>Up</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ ...counterActions }, dispatch),
  };
};

export const DumbApp = App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
