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
      <span className="color01" style={{ borderColor: `${colors.color01} transparent transparent transparent`}} ></span>
      <span className="color02" style={{ borderColor: `${colors.color02} transparent transparent transparent` }} ></span>
      <span className="color03" style={{ borderColor: `${colors.color03} transparent transparent transparent` }} ></span>
      <span className="color04" style={{ borderColor: `${colors.color04} transparent transparent transparent` }} ></span>
      <span className="color05" style={{ borderColor: `${colors.color05} transparent transparent transparent` }} ></span>
      <span className="color06" style={{ borderColor: `${colors.color06} transparent transparent transparent` }} ></span>
      <span className="color07" style={{ borderColor: `${colors.color07} transparent transparent transparent` }} ></span>
      <span className="color08" style={{ borderColor: `${colors.color08} transparent transparent transparent` }} ></span>
      <span className="color09" style={{ borderColor: `${colors.color09} transparent transparent transparent` }} ></span>
      <span className="color10" style={{ borderColor: `${colors.color10} transparent transparent transparent` }} ></span>
      <span className="color11" style={{ borderColor: `${colors.color11} transparent transparent transparent` }} ></span>
      <span className="color12" style={{ borderColor: `${colors.color12} transparent transparent transparent` }} ></span>
    </div>
  )
}

export default ColorWheel;
