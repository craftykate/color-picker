import React from 'react';
import ColorSwatch from '../ColorSwatch/ColorSwatch';


const ComplimentaryColor = (props) => {
  return (
    <div className="complimentary">
      <h2>Complimentary Colors</h2>
      <ColorSwatch
        class="color1"
        color={props.color}
        updateColor={props.updateColor}
        hexClick={props.hexClick}/>
      <ColorSwatch
        class="color2"
        color={props.compColor}
        updateColor={props.updateColor}
        hexClick={props.hexClick}/>
    </div>
  )
}

export default ComplimentaryColor;
