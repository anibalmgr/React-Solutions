import React, { useState } from 'react';


function Mouse(props) {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  function handleMouseMove(e) {

    const newPosition = {x: e.clientX, y: e.clientY}
    setMousePosition(newPosition)
  }

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      <p>The current mouse position is ({mousePosition.x}, {mousePosition.y})</p>
      {props.render(mousePosition)}
    </div>
    );
}

export default Mouse;
