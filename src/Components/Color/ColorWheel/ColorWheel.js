import React from 'react';
import './ColorWheel.css';

const ColorWheel = (props) => {
  let colors = {
    color01: props.colors[0],
    color02: props.bgc,
    color03: props.bgc,
    color04: props.bgc,
    color05: props.bgc,
    color06: props.bgc,
    color07: props.bgc,
    color08: props.bgc,
    color09: props.bgc,
    color10: props.bgc,
    color11: props.bgc,
    color12: props.bgc
  };

  switch (props.wheel) {
    case 'comp':
      colors.color07 = props.colors[1];
      break;
    case 'split':
      colors.color06 = props.colors[2];
      colors.color08 = props.colors[1];
      break;
    case 'triad':
      colors.color05 = props.colors[2];
      colors.color09 = props.colors[1];
      break;
    case 'analogous':
      colors.color02 = props.colors[2];
      colors.color12 = props.colors[1];
      break;
    case 'square':
      colors.color04 = props.colors[1];
      colors.color07 = props.colors[3];
      colors.color10 = props.colors[2];
      break;
    default:
      break;
  };

  let classes = [document.body.style.backgroundColor, 'colorWheel'];
  return (
    <div className={classes.join(" ")}>
      {Object.keys(colors).map(color => {
        return (<span key={color} className={color} style={{ borderColor: `${colors[color]} transparent transparent transparent` }} ></span>)
      })}
    </div>
  )
}

export default ColorWheel;
