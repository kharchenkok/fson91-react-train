import React, { Component } from 'react';
import { PulseButton } from './Styled.styled';
class Counter2 extends Component {
  state = {
    counter: 0,
  };

  handleClick = (isIncrement) => {
    this.setState((prevState) => {
      return {
        counter: isIncrement ? prevState.counter + 1 : prevState.counter - 1,
      };
    });
  };
  render() {
    const { counter } = this.state;
    const { handleClick } = this;
    return (
      <div className="">
        <div
          className="card bg-dark text-white rounded-4"
          style={{ width: '600px' }}
        >
          <div className="card-body">
            <h5 className="card-title text-center fs-1">Counter</h5>
            <p className="card-text  text-center" style={{ fontSize: '80px' }}>
              {counter}
            </p>
            <div className="d-flex justify-content-center px-5">
              {/*<PulseButton*/}
              {/*  className="btn btn-outline-success me-5 px-4 rounded-4"*/}
              {/*  onClick={handleClick}*/}
              {/*>*/}
              {/*  <i className="bi bi-plus-circle fs-1"></i>*/}
              {/*</PulseButton>*/}
              <button
                type="button"
                className="btn btn-outline-success me-5 px-4 rounded-4"
                onClick={() => handleClick(true)}
              >
                <i className="bi bi-plus-circle fs-1"></i>
              </button>
              <button
                className="btn  btn-outline-danger ms-5 px-4 rounded-4"
                onClick={() => handleClick(false)}
              >
                <i className="bi bi-dash-circle fs-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Counter2;
