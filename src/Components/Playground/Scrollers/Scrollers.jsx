import React, { useState, useEffect, useRef } from 'react';
import './scrollers.css';
import Scroller from './Scroller';

function Scrollers() {
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
      backgroundColor: getRandomColor()
    });


    window.scrollTo({
      top: whereToScroll,
      behavior: "auto"
    });
  }

const thirdRef = useRef();

function handleThirdClick(e) {
  handleClick(e)
  let whereToScroll = e.target.value;

    thirdRef.current.scrollTo({
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
        <Scroller styleClass="first" text="go to the top" value="0" onClick={handleClick}/>
        <Scroller styleClass="second" text="go to the bottom" value="1000" onClick={handleClick}/>
        <Scroller setRef={thirdRef} styleClass="third" text="go to my bottom" text2="go to my top" value="1000" value2="0" onClick={handleThirdClick}/>
      </div>
    </div>
  );
}

export default Scrollers;
