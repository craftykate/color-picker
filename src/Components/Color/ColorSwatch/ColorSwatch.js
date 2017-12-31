import React from 'react';
import colorCalculator from '../../../utils/ColorCalculator';


const ColorSwatch = (props) => {
  let classes = `colorBlock ${props.class}`;
  let rgb = colorCalculator.convertHexToRgb(props.color).join(", ");
  return (
    <div
      className={classes}
      style={{backgroundColor: props.color, position: 'relative'}}>
      <div className="hex">
        <p>{props.color.toUpperCase()}<br/>
        rgb({rgb})</p>
      </div>
    </div>
  )
}

export default ColorSwatch;
