import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

/* 
https://github.com/michalsnik/aos#animations
npm i aos --save
*/


const BodyGrid = (props) => {
    useEffect(() => {
        Aos.init({duration: 1000});
      }, [])
  return (
    <div className="grid-item" data-aos="fade-up" >
    <img src={props.img} alt="img" width="270px" height="280px" />
    </div>
  );
}

export default BodyGrid;
