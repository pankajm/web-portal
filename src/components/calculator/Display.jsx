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