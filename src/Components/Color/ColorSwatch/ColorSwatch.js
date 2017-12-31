import React from 'react';
import colorCalculator from '../../../utils/ColorCalculator';


const ColorSwatch = (props) => {
  let classes = `colorBlock ${props.class}`;
  let rgb = colorCalculator.convertHexToRgb(props.color).join(", ");
  return (
    <div
      onClick={() => props.updateColor(props.color)}
      className={classes}
      style={{backgroundColor: props.color, position: 'relative'}}>
      <div
        onClick={props.hexClick}
        className="hex">
        <p>{props.color.toUpperCase()}<br/>
        rgb({rgb})</p>
      </div>
    </div>
  )
}

export default ColorSwatch;
