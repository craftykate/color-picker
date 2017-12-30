import React from 'react';
import './ComplimentaryColor.css';


const ComplimentaryColor = (props) => (
  <div className="complimentary">
    <p>Complimentary Colors</p>
    <div
      className="color1"
      style={{backgroundColor: props.color}}/>
    <div
      className="color2"
      style={{backgroundColor: props.compColor}}/>
  </div>
)

export default ComplimentaryColor;
