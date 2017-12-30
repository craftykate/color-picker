import React, { Component } from 'react';
import ColorPicker from './ColorPicker/ColorPicker';


class Color extends Component {
  state = {
    showPicker: false,
    color: '#ffae4e'
  }

  handleToggleColorPicker = () => {
    this.setState( (prevState) => {
      return {
        showPicker: !prevState.showPicker
      }
    });
  }

  handleChangeColor = (color) => {
    this.setState({
      color: color.hex
    })
  }

  handleClosePicker = () => {
    this.setState({
      showPicker: false
    })
  }

  render() {
    return (
      <ColorPicker
        color={this.state.color}
        toggleColorPicker={this.handleToggleColorPicker}
        showPicker={this.state.showPicker}
        changeColor={this.handleChangeColor}
        closePicker={this.handleClosePicker}/>
    )
  }
}

export default Color;
