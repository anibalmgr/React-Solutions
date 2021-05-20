import React, { useState } from 'react';
import InputForm from '../../InputForm';
import './appearOnScroll.css';
import { useAppearWithCss } from '../../Hooks';
import svg from '../../../svg';


function ManyCats(props) {
  const [cats, setCats] = useState(1);
  const [catsRef, catsClass] = useAppearWithCss();

  const catsStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    background: "pale-blue"
  }

  function addCats(e) {
    const newCats = parseInt(e.number);
    newCats >= 0 && setCats(newCats);
  }

  let catsArray = [...Array(cats)];


  return (
    <div>
      <div ref={catsRef} style={catsStyle} className={catsClass}>
        <InputForm fStyle={{padding: "25px"}} number={cats} onAdd={addCats} buttonText="How many cats?"/>
        {catsArray.map((number, index) =>
          <img className="cat" key={index} src={svg.cat} alt="cat" /> )}
      </div>
    </div>
  )
}

export default ManyCats;
