import React from 'react';
import { ChromePicker } from 'react-color';
import './ColorPicker.css';


const ColorPicker = (props) => {
  let saveLink;
  if (props.savedColors.includes(props.color)) {
    saveLink = <a className="saved">(saved!)</a>;
  } else {
    saveLink = <a className="save" onClick={props.saveColor}>(save)</a>;
  }
  return (
    <div className="colorPicker">
      <p>
        Click to pick a color
      </p>
      <div
        className="colorSwatch"
        onClick={props.toggleColorPicker}
        style={{backgroundColor: props.color}} />
      {props.showPicker ?
        <div
          className="popup"
          style={{zIndex:999}}>
          <div
            className="closePopup"
            style={{position: 'fixed', top: 0, right: 0, bottom: 0, left: 0}}
            onClick={props.closePicker}/>
          <ChromePicker
            color={props.color}
            disableAlpha={true}
            onChange={props.changeColor} />
        </div>
      : null }
      <div style={{textAlign: 'center', margin: '10px 0 10px 0'}}>
        {saveLink}
      </div>
    </div>
  )
}

export default ColorPicker;
