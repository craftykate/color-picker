import React from 'react';
import ColorSwatch from '../ColorSwatch/ColorSwatch';


const ComplimentaryColor = (props) => {
  return (
    <div className="complimentary">
      <h2>Complimentary Colors</h2>
      <ColorSwatch
        class="color1"
        color={props.color} />
      <ColorSwatch
        class="color2"
        color={props.compColor} />
    </div>
  )
}

export default ComplimentaryColor;
