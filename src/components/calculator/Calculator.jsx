/**
 * Calculator parent componenet with Disply and Keypad as child components
 */


import React, { Component } from 'react';
import Keypad from './Keypad';
import Display from './Display';
import { Fragment } from 'react';

class Calculator extends Component {

  state = {
    expression: ""
  }

  handleKeyPress = (key) => {
    const { expression } = this.state
    try {
      if (key === "=") {
        this.evaluateExpression();
        return;
      }
    }
    catch (ex) {
      this.setState({ expression: ex });
    }
    if (key === "CLR") {
      this.setState({ expression: "" })
      return;
    }
    this.setState({ expression: expression + key });
  }

  evaluateExpression = () => {
    const result = eval(this.state.expression);
    this.setState({ expression: result });
  }

  render() {
    return (
      <Fragment>
        <div className="m-5">
          <Display answer={this.state.expression}></Display>
          <Keypad onKeyPress={this.handleKeyPress}></Keypad>
        </div>
      </Fragment>
    );
  }
}

export default Calculator;