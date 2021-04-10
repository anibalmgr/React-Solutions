import React from 'react';
import svg from '../../svg';


function Cat(props) {
  const mouse = props.mouse;

  return (
    <img src={svg.cat} style={{
      width: "50px",
      height: "50px",
      position: 'absolute',
      left: mouse.x -25,
      top: mouse.y -25,
      zIndex: "-1"
    }} alt="Cat"/>
  )
}

export default Cat;
