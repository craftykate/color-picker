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
    const triad1 = colorCalculator.getNewColor(color, 'triad1');
    const triad2 = colorCalculator.getNewColor(color, 'triad2');
    const square1 = colorCalculator.getNewColor(color, 'square1');
    const square2 = colorCalculator.getNewColor(color, 'square2');
    const square3 = colorCalculator.getNewColor(color, 'square3');
    const analogous1 = colorCalculator.getNewColor(color, 'analogous1');
    const analogous2 = colorCalculator.getNewColor(color, 'analogous2');
    this.state = {
      showPicker: false,
      color: color,
      compColor: compColor,
      split1: split1,
      split2: split2,
      triad1: triad1,
      triad2: triad2,
      square1: square1,
      square2: square2, 
      square3: square3,
      analogous1: analogous1, 
      analogous2: analogous2,
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
      split2: colorCalculator.getNewColor(color.hex, 'split2'),
      triad1: colorCalculator.getNewColor(color.hex, 'triad1'),
      triad2: colorCalculator.getNewColor(color.hex, 'triad2'),
      square1: colorCalculator.getNewColor(color.hex, 'square1'),
      square2: colorCalculator.getNewColor(color.hex, 'square2'),
      square3: colorCalculator.getNewColor(color.hex, 'square3'),
      analogous1: colorCalculator.getNewColor(color.hex, 'analogous1'),
      analogous2: colorCalculator.getNewColor(color.hex, 'analogous2'),
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
      split2: colorCalculator.getNewColor(oldColor, 'split2'),
      triad1: colorCalculator.getNewColor(oldColor, 'triad1'),
      triad2: colorCalculator.getNewColor(oldColor, 'triad2'),
      square1: colorCalculator.getNewColor(oldColor, 'square1'),
      square2: colorCalculator.getNewColor(oldColor, 'square2'),
      square3: colorCalculator.getNewColor(oldColor, 'square3'),
      analogous1: colorCalculator.getNewColor(oldColor, 'analogous1'),
      analogous2: colorCalculator.getNewColor(oldColor, 'analogous2'),
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
          name="Complementary Colors"
          marginRight={true}
          colors={[this.state.color, this.state.compColor]}
          updateColor={this.handleUpdateColor}
          hexClick={this.handleHexClick} />
        <ColorCombo
          name="Split Complementary Colors"
          marginRight={false}
          colors={[this.state.color, this.state.split1, this.state.split2]}
          updateColor={this.handleUpdateColor}
          hexClick={this.handleHexClick} />
        <ColorCombo
          name="Analogous"
          marginRight={true}
          colors={[this.state.color, this.state.analogous1, this.state.analogous2]}
          updateColor={this.handleUpdateColor}
          hexClick={this.handleHexClick} />
        <ColorCombo
          name="Triad Combination"
          marginRight={false}
          colors={[this.state.color, this.state.triad1, this.state.triad2]}
          updateColor={this.handleUpdateColor}
          hexClick={this.handleHexClick} />
        <ColorCombo
          name="Square Combination"
          marginRight={true}
          colors={[this.state.color, this.state.square1, this.state.square2, this.state.square3]}
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
