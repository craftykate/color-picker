import React from 'react';
import './ColorSwatch.css';


const ColorSwatch = (props) => (
  <div
    onClick={props.toggleColorPicker}
    className="colorSwatch"
    style={{backgroundColor: props.color}} />
)

export default ColorSwatch;
