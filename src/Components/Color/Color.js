import React, { Component } from 'react';
import convertHexToNewColor from '../../utils/ColorConverter';

import ColorPicker from './ColorPicker/ColorPicker';
import ComplimentaryColor from'./ComplimentaryColor/ComplimentaryColor';
import SplitComplimentaryColors from'./SplitComplimentaryColors/SplitComplimentaryColors';


class Color extends Component {
  constructor(props) {
    super(props);
    const color = '#ffae4e';
    const compColor = convertHexToNewColor(color, 'comp');
    const split1 = convertHexToNewColor(color, 'split1');
    const split2 = convertHexToNewColor(color, 'split2');
    this.state = {
      showPicker: false,
      color: color,
      compColor: compColor,
      split1: split1,
      split2: split2
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
      compColor: convertHexToNewColor(color.hex, 'comp'),
      split1: convertHexToNewColor(color.hex, 'split1'),
      split2: convertHexToNewColor(color.hex, 'split2')
    })
  }

  handleClosePicker = () => {
    this.setState({
      showPicker: false
    })
  }

  render() {
    return (
      <React.Fragment>
        <ColorPicker
          color={this.state.color}
          toggleColorPicker={this.handleToggleColorPicker}
          showPicker={this.state.showPicker}
          changeColor={this.handleChangeColor}
          closePicker={this.handleClosePicker}/>
        <ComplimentaryColor
          color={this.state.color}
          compColor={this.state.compColor}/>
        <SplitComplimentaryColors
          color={this.state.color}
          split1={this.state.split1}
          split2={this.state.split2}/>
      </React.Fragment>
    )
  }
}

export default Color;
