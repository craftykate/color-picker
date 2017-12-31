import React from 'react';

const ColorSwatch = (props) => {
  let classes = `colorBlock ${props.class}`;

  return (
    <div
      className={classes}
      style={{backgroundColor: props.color}}>
      <div className="hex"><p>{props.color}</p></div>
    </div>
  )
}

export default ColorSwatch;
