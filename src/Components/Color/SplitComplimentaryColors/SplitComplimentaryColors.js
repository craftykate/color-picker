import React from 'react';
import './SplitComplimentaryColors.css'


const SplitComplimentaryColors = (props) => (
  <div className="splitComp">
    <p>Split Complimentary Colors</p>
    <div
      className="color1"
      style={{backgroundColor: props.color}} />
    <div
      className="color2"
      style={{backgroundColor: props.split1}} />
    <div className="color3"
      style={{backgroundColor: props.split2}} />
  </div>
)

export default SplitComplimentaryColors;
