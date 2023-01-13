import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import DepoImg from "./images/4.jpg"
/* 
https://github.com/michalsnik/aos#animations
npm i aos --save
*/

const Shop = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
      }, [])
  return (
    <div className="grid-item" data-aos="fade-up" >
    <img src={DepoImg} alt="img" width="450px" height="450px" />
    </div>
  );
}

export default Shop;
