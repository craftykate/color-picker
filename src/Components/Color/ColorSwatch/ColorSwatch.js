import React from 'react';
import colorCalculator from '../../../utils/ColorCalculator';


const ColorSwatch = (props) => {
  let classes = `colorBlock ${props.class}`;
  let rgb = colorCalculator.convertHexToRgb(props.color).join(", ");
  return (
    <div
      className={classes}
      style={{backgroundColor: props.color}}>
      <div className="hex">
        <p>{props.color}<br/>
        rgb({rgb})</p>
      </div>
    </div>
  )
}

export default ColorSwatch;
