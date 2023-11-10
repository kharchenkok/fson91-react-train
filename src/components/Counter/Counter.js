import React, { Component } from 'react';
import './Counter.css';
import Controls from './Controls';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = (event) => {
    console.log('Увеличить на 1');
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  handleDecrement = (event) => {
    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
