import React, { useState } from 'react';
import { useSpring, animated } from "@react-spring/web";
import InputForm from '../InputForm';
import svg from '../../svg';


function ManyCats(props) {
  const [cats, setCats] = useState(10);

  const catStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(10, 1fr)",
    background: "pale-blue"
  }

  const catProps = useSpring({
  width: "100%",
  opacity: 1,
  from: { opacity: 0 },
})

  function addCats(e) {
    const newCats = parseInt(e.number);
    setCats(newCats);
  }

  let catsArray = [...Array(cats)];





  return (
    <div>
      <div style={catStyle}>
        <InputForm fStyle={{padding: "25px"}} number="10" onAdd={addCats}/>
        {catsArray.map((number, index) =>
          <animated.img style={catProps} key={index} src={svg.cat} alt="cat" /> )}
      </div>
    </div>
  )
}

export default ManyCats;
