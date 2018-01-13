import React, { Component } from 'react';
import colorCalculator from '../../utils/ColorCalculator';
import ColorPicker from './ColorPicker/ColorPicker';
import ColorCombo from './ColorCombo/ColorCombo';
import SavedColors from './SavedColors/SavedColors';


class Color extends Component {
  constructor(props) {
    super(props);
    let savedColors = [];
    if (localStorage.getItem('savedColors') !== null) {
      savedColors = JSON.parse(localStorage.getItem('savedColors'));
    }
    this.state = {
      colors: {},
      showPicker: false,
      savedColors: savedColors,
      backgroundColor: "white",
      hoverState: "",
      showDelPopup: false,
      itemToDelete: ''
    }
  }

  // set state.colors when starting
  componentWillMount() {
    const loadColor = this.state.savedColors.length > 0 ? this.state.savedColors[this.state.savedColors.length - 1] : '#5ED5FF'
    this.changeColors(loadColor);
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
    this.setState({ showPicker: false })
  }

  // don't set color as main color if clicking on hex/rgb values
  handleHexClick = (event) => {
    event.stopPropagation();
  }

  // save color
  handleSaveColor = () => {
    const updatedSavedColors = [...this.state.savedColors, this.state.colors.color01];
    localStorage.setItem('savedColors', JSON.stringify(updatedSavedColors));
    this.setState({ savedColors: updatedSavedColors })
  }

  // clear saved colors
  handleClearSaved = () => {
    localStorage.clear();
    this.setState({ savedColors: [] })
  }

  // show delete confirmation window
  handleShowDelPopup = (index) => {
    this.setState({ 
      showDelPopup: true,
      itemToDelete: index
    })
  }

  handleHideDelPopup = () => {
    this.setState({ 
      showDelPopup: false,
      itemToDelete: ''
    })
  }

  // delete one saved color
  handleDeleteOneSaved = () => {
    let updatedSavedColors = [...this.state.savedColors];
    updatedSavedColors.splice(this.state.itemToDelete, 1);
    localStorage.setItem('savedColors', JSON.stringify(updatedSavedColors));
    this.setState({ 
      showDelPopup: false,
      savedColors: updatedSavedColors,
      itemToDelete: ''
    })
  }

  // move saved color
  handleMoveLeft = (index) => {
    const updatedSavedColors = [...this.state.savedColors];
    const itemToMove = updatedSavedColors[index];
    updatedSavedColors[index] = updatedSavedColors[index - 1];
    updatedSavedColors[index - 1] = itemToMove;
    localStorage.setItem('savedColors', JSON.stringify(updatedSavedColors));
    this.setState({ 
      savedColors: updatedSavedColors,
      hoverState: ""
    });
  }

  handleMoveRight = (index) => {
    const updatedSavedColors = [...this.state.savedColors];
    const itemToMove = updatedSavedColors[index];
    updatedSavedColors[index] = updatedSavedColors[index + 1];
    updatedSavedColors[index + 1] = itemToMove;
    localStorage.setItem('savedColors', JSON.stringify(updatedSavedColors));
    this.setState({ 
      savedColors: updatedSavedColors,
      hoverState: ""
    });
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

  // gets rid of "sticky" hover state on mobile devices after clicking link
  // add hover class when hovering, remove it when mouse leaves
  handleAddHoverClass = (savedColorIndex, direction) => {
    this.setState((prevState, props) => {
      const newState = prevState.hoverState === "" ? [savedColorIndex, direction] : ""
      return {
        hoverState: newState
      }
    })
  }
  handleRemoveHoverClass = () => {
    this.setState({
      hoverState: ""
    })
  }

  // render color combinations
  renderColorCombinations = () => {
    let colorCombos = [
      {
        name: "Complementary",
        wheel: "comp",
        colors: [this.state.colors.color01, this.state.colors.color07]
      },
      {
        name: "Split Complementary",
        wheel: "split",
        colors: [this.state.colors.color01, this.state.colors.color08, this.state.colors.color06]
      },
      {
        name: "Triad Combination",
        wheel: "triad",
        colors: [this.state.colors.color01, this.state.colors.color09, this.state.colors.color05]
      },
      {
        name: "Analogous",
        wheel: "analogous",
        colors: [this.state.colors.color01, this.state.colors.color12, this.state.colors.color02]
      },
      {
        name: "Square Combination",
        wheel: "square",
        colors: [this.state.colors.color01, this.state.colors.color04, this.state.colors.color10, this.state.colors.color07]
      },
      {
        name: "With Gray",
        wheel: "single",
        colors: [this.state.colors.color01, "#C8C8C8", "#828282"]
      }
    ]

    return colorCombos.map((combo, i) => {
      const margin = i%2 === 0 ? true : false;
      return (
        <ColorCombo
          key={`${combo}_${i}`}
          name={combo.name}
          wheel={combo.wheel}
          marginRight={margin}
          colors={combo.colors}
          updateColor={this.changeColors}
          hexClick={this.handleHexClick}
          bgc={this.state.backgroundColor} />
      )
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
          saveColor={this.handleSaveColor}
          savedColors={this.state.savedColors} />
        {this.renderColorCombinations()}
        <hr/>
        <SavedColors
          savedColors={this.state.savedColors}
          updateColor={this.changeColors}
          clearSaved={this.handleClearSaved}
          show={this.state.showDelPopup}
          showDelPopup={this.handleShowDelPopup}
          hideDelPopup={this.handleHideDelPopup}
          deleteOneSaved={this.handleDeleteOneSaved}
          moveLeft={this.handleMoveLeft}
          moveRight={this.handleMoveRight}
          addHoverClass={this.handleAddHoverClass}
          removeHoverClass={this.handleRemoveHoverClass}
          hover={this.state.hoverState}/>
      </React.Fragment>
    )
  }
}

export default Color;
