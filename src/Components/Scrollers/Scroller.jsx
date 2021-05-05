import React from 'react';


function Scroller(props) {
  return(
    <div ref={props.setRef} className={props.styleClass + " scroller"}>
      <button value={props.value} onClick={(e) => props.onClick(e)}>
        Click me and {props.text}
      </button>
      {props.styleClass === "third" && <div className="placeholder" />}
      {props.styleClass === "third" && <button value={props.value2} onClick={(e) => props.onClick(e)}>
        Click me and {props.text2}
      </button>}
      </div>
        );
      }

export default Scroller;
