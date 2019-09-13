import React, { Component } from 'react';

export default class ErrorBoundry extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {

    if (this.state.hasError) {
      return (
        <div><h1> We apologize, but something has gone terribly wrong. </h1></div>
      )
    }

    return this.props.children;
  }
}
