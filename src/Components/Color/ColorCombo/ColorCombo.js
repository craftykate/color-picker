import React from 'react';
import ColorSwatch from '../ColorSwatch/ColorSwatch';
import ColorWheel from '../ColorWheel/ColorWheel';


const ColorCombo = (props) => {
  const marginRight = props.marginRight ? '10%' : '0';
  return (
    <div
      className="colorCombo"
      style={{marginRight: marginRight}}
      >
      <ColorWheel 
        wheel={props.wheel}
        colors={props.colors}/>
      <h2>{props.name}</h2>
      {props.colors.map((color, i) => {
        const classes=`color num${i+1}of${props.colors.length}`;
        return (
          <ColorSwatch
            key={i}
            class={classes}
            color={props.colors[i]}
            updateColor={props.updateColor}
            hexClick={props.hexClick}/>
        )
      })}
    </div>
  )
}

export default ColorCombo;
