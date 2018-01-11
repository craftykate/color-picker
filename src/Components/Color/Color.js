import React, { Component } from 'react';
import colorCalculator from '../../utils/ColorCalculator';
import ColorPicker from './ColorPicker/ColorPicker';
import ColorCombo from './ColorCombo/ColorCombo';
import SavedColors from './SavedColors/SavedColors';


class Color extends Component {
  state = {
    colors: {},
    showPicker: false,
    savedColors: [],
    backgroundColor: "white"
  }

  // set state.colors when starting
  componentWillMount() {
    this.changeColors('#5ED5FF');
  }

  // change color wheel colors based on color picked
  changeColors = (color) => {
    this.setState({
      colors: {
        color01: color,
        color02: colorCalculator.getNewColor(color, '30'),
        color03: colorCalculator.getNewColor(color, '60'),
        color04: colorCalculator.getNewColor(color, '90'),
        color05: colorCalculator.getNewColor(color, '120'),
        color06: colorCalculator.getNewColor(color, '150'),
        color07: colorCalculator.getNewColor(color, '180'),
        color08: colorCalculator.getNewColor(color, '210'),
        color09: colorCalculator.getNewColor(color, '240'),
        color10: colorCalculator.getNewColor(color, '270'),
        color11: colorCalculator.getNewColor(color, '300'),
        color12: colorCalculator.getNewColor(color, '330')
      }
    });
  }

  // change color wheel colors based on hex value of color picker
  handleChangeColor = (color) => {
    this.changeColors(color.hex);
  }

  // show color picker
  handleToggleColorPicker = () => {
    this.setState((prevState) => {
      return {
        showPicker: !prevState.showPicker
      }
    });
  }

  // hide color picker
  handleClosePicker = () => {
    this.setState({
      showPicker: false
    })
  }

  // don't set color as main color if clicking on hex/rgb values
  handleHexClick = (event) => {
    event.stopPropagation();
  }

  // save color
  handleSaveColor = () => {
    const updatedSavedColors = [...this.state.savedColors, this.state.colors.color01];
    this.setState({
      savedColors: updatedSavedColors
    })
  }

  // clear saved colors
  handleClearSaved = () => {
    this.setState({
      savedColors: []
    })
  }

  // change background to opposite color 
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
          color={this.state.colors.color01}
          toggleColorPicker={this.handleToggleColorPicker}
          showPicker={this.state.showPicker}
          changeColor={this.handleChangeColor}
          closePicker={this.handleClosePicker}
          saveColor={this.handleSaveColor} />
        <ColorCombo
          name="Complementary"
          wheel="comp"
          marginRight={true}
          colors={[this.state.colors.color01, this.state.colors.color07]}
          updateColor={this.changeColors}
          hexClick={this.handleHexClick} 
          bgc={this.state.backgroundColor} />
        <ColorCombo
          name="Split Complementary"
          wheel="split"
          marginRight={false}
          colors={[this.state.colors.color01, this.state.colors.color08, this.state.colors.color06]}
          updateColor={this.changeColors}
          hexClick={this.handleHexClick} 
          bgc={this.state.backgroundColor} />
        <ColorCombo
          name="Triad Combination"
          wheel="triad"
          marginRight={true}
          colors={[this.state.colors.color01, this.state.colors.color09, this.state.colors.color05]}
          updateColor={this.changeColors}
          hexClick={this.handleHexClick} 
          bgc={this.state.backgroundColor} />
        <ColorCombo
          name="Analogous"
          wheel="analogous"
          marginRight={false}
          colors={[this.state.colors.color01, this.state.colors.color12, this.state.colors.color02]}
          updateColor={this.changeColors}
          hexClick={this.handleHexClick} 
          bgc={this.state.backgroundColor} />
        <ColorCombo
          name="Square Combination"
          wheel="square"
          marginRight={true}
          colors={[this.state.colors.color01, this.state.colors.color04, this.state.colors.color10, this.state.colors.color07]}
          updateColor={this.changeColors}
          hexClick={this.handleHexClick} 
          bgc={this.state.backgroundColor} />
        <SavedColors
          savedColors={this.state.savedColors}
          updateColor={this.changeColors}
          clearSaved={this.handleClearSaved} />
      </React.Fragment>
    )
  }
}

export default Color;
