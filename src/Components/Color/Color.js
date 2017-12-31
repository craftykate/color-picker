import React, { Component } from 'react';
import colorCalculator from '../../utils/ColorCalculator';

import ColorPicker from './ColorPicker/ColorPicker';
import ColorCombo from './ColorCombo/ColorCombo';
import SavedColors from './SavedColors/SavedColors';


class Color extends Component {
  constructor(props) {
    super(props);
    const color = '#5ED5FF';
    const compColor = colorCalculator.getNewColor(color, 'comp');
    const split1 = colorCalculator.getNewColor(color, 'split1');
    const split2 = colorCalculator.getNewColor(color, 'split2');
    this.state = {
      showPicker: false,
      color: color,
      compColor: compColor,
      split1: split1,
      split2: split2,
      savedColors: [],
      backgroundColor: "white"
    }
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
      color: color.hex,
      compColor: colorCalculator.getNewColor(color.hex, 'comp'),
      split1: colorCalculator.getNewColor(color.hex, 'split1'),
      split2: colorCalculator.getNewColor(color.hex, 'split2')
    })
  }

  handleClosePicker = () => {
    this.setState({
      showPicker: false
    })
  }

  handleUpdateColor = (oldColor) => {
    this.setState({
      color: oldColor,
      compColor: colorCalculator.getNewColor(oldColor, 'comp'),
      split1: colorCalculator.getNewColor(oldColor, 'split1'),
      split2: colorCalculator.getNewColor(oldColor, 'split2')
    })
  }

  handleHexClick = (event) => {
    event.stopPropagation();
  }

  handleSaveColor = () => {
    const updatedSavedColors = [...this.state.savedColors, this.state.color];
    this.setState({
      savedColors: updatedSavedColors
    })
  }

  handleClearSaved = () => {
    this.setState({
      savedColors: []
    })
  }

  toggleBackgroundColor = () => {
    this.setState((prevState, props) => {
      const newColor = prevState.backgroundColor === "white" ? "black" : "white"
      document.body.style.backgroundColor = newColor;
      return {
        backgroundColor: newColor
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <a
          className="textColor"
          onClick={this.toggleBackgroundColor}>(toggle background color)</a>
        <ColorPicker
          color={this.state.color}
          toggleColorPicker={this.handleToggleColorPicker}
          showPicker={this.state.showPicker}
          changeColor={this.handleChangeColor}
          closePicker={this.handleClosePicker}
          saveColor={this.handleSaveColor}/>
        <ColorCombo
          name="Complimentary Colors"
          marginRight={true}
          colors={[this.state.color, this.state.compColor]}
          updateColor={this.handleUpdateColor}
          hexClick={this.handleHexClick} />
        <ColorCombo
          name="Split Complimentary Colors"
          marginRight={false}
          colors={[this.state.color, this.state.split1, this.state.split2]}
          updateColor={this.handleUpdateColor}
          hexClick={this.handleHexClick} />
        <SavedColors
          savedColors={this.state.savedColors}
          updateColor={this.handleUpdateColor}
          clearSaved={this.handleClearSaved}/>
      </React.Fragment>
    )
  }
}

export default Color;
