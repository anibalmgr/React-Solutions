import React, { useState, useEffect } from 'react';
import './index.css';

function Effects() {
  const [count, setCount] = useState(0);
  const [styles, setStyles] = useState({
    backgroundColor: "Pink",
  })

  function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


  function handleClick(e) {
    setCount(count + 1);
    let whereToScroll = e.target.value;

    setStyles({
      transition: "background-color 1s ease",
      backgroundColor: getRandomColor(),
      height: "2000px"
    });
    window.scrollTo({
      top: whereToScroll,
      behavior: "smooth"
    });
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    document.body.style.backgroundColor = getRandomColor();
});

  return (
    <div>
      <p>You clicked {count} times</p>
      <div className="buttons" style={styles}>
        <button value="0" onClick={handleClick}>
          <h1>Click me</h1>
        </button>
        <button value="1000" onClick={handleClick}>
          <h1>Click me</h1>
        </button>
      </div>
    </div>
  );
}

export default Effects;
