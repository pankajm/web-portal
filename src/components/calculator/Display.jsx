/**
 * Calculator top display component to show output of an expression
 */


import React, { Component } from 'react';

class Display extends Component {
  render() {
    const { answer } = this.props;
    return (
      <div className="cal-display">
        {answer}
      </div>
    );
  }
}

export default Display;