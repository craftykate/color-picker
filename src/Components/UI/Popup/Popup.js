import React from 'react';
import './Popup.css';
import Backdrop from '../Backdrop/Backdrop';

const popup = (props) => (
  <React.Fragment>
    <Backdrop
      show={props.show}
      hide={props.hide} />
    <div
      className="Popup"
      style={{
        visibility: props.show ? 'visible' : 'hidden',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  </React.Fragment>
);

export default popup;
