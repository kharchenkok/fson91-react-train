import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = (index) => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = (index) => {
    const optionClasses = ['ColorPicker__option'];
    index === this.state.activeOptionIdx &&
      optionClasses.push('ColorPicker__option--active');
    return optionClasses.join(' ');
  };
  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label, color } = options[activeOptionIdx];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title" style={{ color: color }}>
          Color Picker
        </h2>
        <p>Обрано колір: {label}</p>

        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => {
                this.setActiveIdx(index);
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
