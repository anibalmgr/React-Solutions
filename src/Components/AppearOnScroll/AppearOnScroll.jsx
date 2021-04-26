import React from "react";

// Modules
import {animated} from "@react-spring/web";

// Images
import svg from '../../svg';
import ManyCats from './ManyCats';
// React hooks
import { useVisibility, useAnimation, useIntObs, useAppearWithSprings, useAppearWithCss } from '../Hooks';

// Styles
import './appearOnScroll.css';

function AppearOnScroll() {

  // A ref and a boolean if the first <div> is visible.
  const [aniDivRef1, visibility] = useIntObs();
  // A ref and the react-spring style for the second div.
  const [aniDivRef2, style2] = useAppearWithSprings(),
        [robotRef3, rStyle3] = useAppearWithSprings();
  // A ref and a CSS class for the third div.
  const [aniDivRef3, class3] = useAppearWithCss();

  const [robotRef1, rClass1] = useAppearWithCss(),
        [robotRef2, rClass2] = useAppearWithCss(),
        [robotRef4, rClass4] = useAppearWithCss(),
        [robotRef5, rClass5] = useAppearWithCss();

  // A bit of style to make the divs visible.
  const divstyle = {
    width: "70%",
    height: "300px",
    background: "blue",
    marginBottom: "10px"
  }

  // At different colour for div 3, I did that for testing.
  const divStyle3 = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "2vh",
    padding: "2vh",
    width: "70%",
    background: "purple",
    marginBottom: "10px",
    justifyItems: "center"
  }

  // React spring style for the first <div>.
  let div1vis = useVisibility(aniDivRef1);


  let style1 = useAnimation(aniDivRef1, divstyle);


  const boxStyle = {
    position: "fixed",
    top: "20px",
    right: "20px",
    width: "300px",
    background: "rgb(255, 255, 128)"
  }


  return (
    <div>
      <img ref={robotRef1} className={rClass1} src={svg.robot} alt="robot" />
      <div style={boxStyle}>
        <p>Visibility of the first div using the first and the second solution</p>
        <p>{"Using useIntersectionObserver: " + visibility}</p>
        <p>{"Using useBoundingClientRect " + div1vis }</p>
      </div>
      {/* This cats are here for testing, as a way to change the position of the <div>s without scrolling, I should animate them though */}
      <ManyCats />
      <animated.div style={style1} ref={aniDivRef1}>
        <h3>Solution 1</h3>
      </animated.div>
      <animated.div style={{...divstyle, ...style2}} ref={aniDivRef2}>
        <h3>Solution 2</h3>
      </animated.div>
      <div className={class3} style={divStyle3} ref={aniDivRef3}>
        <h3 style={{gridColumn: "1 / -1"}}>Solution 2.1</h3>
        <img ref={robotRef2} className={rClass2} src={svg.robot} alt="robot" />
        <animated.img ref={robotRef3} style={rStyle3} src={svg.robot} alt="robot" />
        <img ref={robotRef4} className={rClass4} src={svg.robot} alt="robot" />
        <img ref={robotRef5} className={rClass5} src={svg.robot} alt="robot" />
      </div>

    </div>
  )
}

export default AppearOnScroll;
