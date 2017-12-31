import React from 'react';
import ColorSwatch from '../ColorSwatch/ColorSwatch';


const SplitComplimentaryColors = (props) => (
  <div className="splitComp">
    <h2>Split Complimentary Colors</h2>
    <ColorSwatch
      class="color1"
      color={props.color} />
    <ColorSwatch
      class="color2"
      color={props.split1} />
    <ColorSwatch
      class="color3"
      color={props.split2} />
  </div>
)

export default SplitComplimentaryColors;
