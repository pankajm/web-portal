import React, { Component } from 'react';

class Keypad extends Component {
  render() {
    const { onKeyPress } = this.props;
    const keyArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
      "+", "-", "/", "*", "=", "CLR"]

    return (
      <div className="keys">
        {keyArray.map((key) =>
          <button name={key} onClick={(e) => onKeyPress(e.currentTarget.name)}>
            <span className="cal-keypad">{key}</span>
          </button>
        )
        }
      </div>
    );
  }
}

export default Keypad;