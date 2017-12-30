import React from 'react';
import { ChromePicker } from 'react-color';
import './ColorPicker.css';
import ColorSwatch from '../ColorSwatch/ColorSwatch';


const ColorPicker = (props) => {
  return (
    <div className="colorPicker">
      <p>
        Click to pick a color
      </p>
      <ColorSwatch
        color={props.color}
        toggleColorPicker={props.toggleColorPicker}/>
      {props.showPicker ?
        <div className="popup">
          <div
            style={{position: 'fixed', top: 0, right: 0, bottom: 0, left: 0}}
            onClick={props.closePicker}/>
          <ChromePicker
            color={props.color}
            disableAlpha={true}
            onChange={props.changeColor} />
        </div>
      : null }
    </div>
  )
}

export default ColorPicker;
