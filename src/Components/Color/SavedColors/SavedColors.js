import React from 'react';

const SavedColors = (props) => {
  const renderedColors = props.savedColors.map((color, i) => {
    return (
      <div
        key={i}
        onClick={() => props.updateColor(color)}
        style={{
          cursor: 'pointer',
          backgroundColor: color,
          width: 20,
          height: 20,
          marginRight: 10,
          marginBottom: 5,
          display: 'inline-block'
        }} />)
  })

  return (
    <div>
      {props.savedColors.length > 0 ? <p style={{marginBottom: 5}}>Saved Colors: (click on one to load)</p> : null}
      {renderedColors}
    </div>
  )

}

export default SavedColors;
