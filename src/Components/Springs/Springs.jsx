import React, { useRef } from "react";
import {animated} from "@react-spring/web";
import svg from '../../svg';
import ManyCats from './ManyCats';
import { useVisibility, useAnimation } from '../functions/Visibility';
import { useIntObs, useAppear } from '../functions/IntObs';


function Springs() {
  const [aniDivRef1, visibility] = useIntObs();

  const divstyle = {
    width: "70%",
    height: "300px",
    background: "blue",
    marginBottom: "10px"
  }

  const [aniDivRef2, style2] = useAppear(divstyle);
  
  const aniDivRef3 = useRef(null);

  let div1vis = useVisibility(aniDivRef1);
  let div3vis = useVisibility(aniDivRef3);


  const divstyle3 = {
    width: "70%",
    height: "300px",
    background: "purple",
    marginBottom: "10px"
  }

  let style1 = useAnimation(aniDivRef1, divstyle),
      style3 = useAnimation(aniDivRef3, divstyle3);


  const pStyle = {
    position: "fixed",
    top: "20px",
    right: "20px",
    width: "300px",
    background: "rgb(255, 255, 128)"
  }


  return (
    <div>
      <img src={svg.robot} alt="robot" />
      <div style={pStyle}>
        <p>{"Using useIntersectionObserver: " + visibility}</p>
        <p>{"Using useBoundingClientRect " + div1vis }</p>
      </div>
      <ManyCats />
      <animated.div style={style1} ref={aniDivRef1} />
      <animated.div style={style2} ref={aniDivRef2} />
      <animated.div style={style3} ref={aniDivRef3} />
    </div>
  )
}

export default Springs;
