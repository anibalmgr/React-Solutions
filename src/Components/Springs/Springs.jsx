import React, { useRef } from "react";
import {animated} from "@react-spring/web";
import svg from '../../svg';
import ManyCats from './ManyCats';
import { useVisibility, useAnimation } from '../functions/Visibility';
import { useIntObs, useAppearWithSprings } from '../functions/IntObs';


function Springs() {

  // A ref and a boolean if the first <div> is visible.
  const [aniDivRef1, visibility] = useIntObs();
  // A ref and the react-spring style for the second div.
  const [aniDivRef2, style2] = useAppearWithSprings();
  // A reference for the third <div>.
  const aniDivRef3 = useRef(null);

  // A bit of style to make the divs visible.
  const divstyle = {
    width: "70%",
    height: "300px",
    background: "blue",
    marginBottom: "10px"
  }

  // At different colour for div 3, I did that for testing.
  const divstyle3 = {
    width: "70%",
    height: "300px",
    background: "purple",
    marginBottom: "10px"
  }

  // React spring style for the first <div>.
  let div1vis = useVisibility(aniDivRef1);


  let style1 = useAnimation(aniDivRef1, divstyle),
      style3 = useAnimation(aniDivRef3, divstyle3);


  const boxStyle = {
    position: "fixed",
    top: "20px",
    right: "20px",
    width: "300px",
    background: "rgb(255, 255, 128)"
  }


  return (
    <div>
      <img src={svg.robot} alt="robot" />
      <div style={boxStyle}>
        <p>{"Using useIntersectionObserver: " + visibility}</p>
        <p>{"Using useBoundingClientRect " + div1vis }</p>
      </div>
      <ManyCats />
      <animated.div style={style1} ref={aniDivRef1} />
      <animated.div style={{...divstyle, ...style2}} ref={aniDivRef2} />
      <animated.div style={style3} ref={aniDivRef3} />
    </div>
  )
}

export default Springs;
