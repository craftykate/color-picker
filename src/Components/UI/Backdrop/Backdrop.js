import React from 'react';
import './Backdrop.css';

const backdrop = (props) => (
  <div
    className="Backdrop"
    onClick={props.hide}
    style={{
      visibility: props.show ? 'visible' : 'hidden',
      opacity: props.show ? '1' : '0'
    }} />
);

export default backdrop;
