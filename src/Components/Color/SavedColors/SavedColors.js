import React from 'react';
import './SavedColors.css';
import colorCalculator from '../../../utils/ColorCalculator';

const SavedColors = (props) => {
  const renderedColors = props.savedColors.map((color, i) => {
    let classLeft;
    let classRight;
    if (props.hover.length > 0) {
      if (i === props.hover[0]) {
        classLeft = props.hover[1] === "left" ? "hover" : "not-hover";
        classRight = props.hover[1] === "right" ? "hover" : "not-hover";
      } 
    }
    return (
      <div 
        key={i}
        className="savedColorContainer">
        <div
          className="savedColor"
          onClick={() => props.updateColor(color)}
          style={{ backgroundColor: color }} />
        <div className="colorNames">
          <p>{color.toUpperCase()}</p>
          <p>({colorCalculator.convertHexToRgb(color).join(", ")})</p>
          <div className="links">
            {i !== 0 ? 
              <p 
                className={classLeft}
                onMouseEnter={() => props.addHoverClass(i, "left")}
                onMouseLeave={() => props.removeHoverClass(i, "left")}
                onClick={() => props.moveLeft(i)}>
                &#060;&#060;
              </p> 
              : <a>&#32;</a>}
            <a onClick={() => props.deleteOneSaved(i)}>(del)</a>
            {i !== props.savedColors.length - 1 ? 
              <p
                className={classRight}
                onMouseEnter={() => props.addHoverClass(i, "right")}
                onMouseLeave={() => props.removeHoverClass(i, "right")}
                onClick={() => props.moveRight(i)}>
                &#062;&#062;
              </p> 
              : <a>&#32;</a>}
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="savedColors">
      {props.savedColors.length > 0 ?
        <p className="title">
          Saved Colors: (click on one to load)
          <a
            className="clearLink"
            onClick={props.clearSaved}>
            (clear all)
          </a>
        </p>
        : <p className="title">Save a color to load it here:</p>}
      <div className="savedColorsWrapper">
        {renderedColors}
      </div>
    </div>
  )

}

export default SavedColors;
