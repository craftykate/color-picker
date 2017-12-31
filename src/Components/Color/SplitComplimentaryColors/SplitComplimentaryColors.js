import React from 'react';
import ColorSwatch from '../ColorSwatch/ColorSwatch';


const SplitComplimentaryColors = (props) => (
  <div className="splitComp">
    <h2>Split Complimentary Colors</h2>
    <ColorSwatch
      class="color1"
      color={props.color}
      updateColor={props.updateColor}
      hexClick={props.hexClick}/>
    <ColorSwatch
      class="color2"
      color={props.split1}
      updateColor={props.updateColor}
      hexClick={props.hexClick}/>
    <ColorSwatch
      class="color3"
      color={props.split2}
      updateColor={props.updateColor}
      hexClick={props.hexClick}/>
  </div>
)

export default SplitComplimentaryColors;
