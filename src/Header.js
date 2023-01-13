import logo from './images/imgbnr.jpg'; // import the header banner image
import Nav from './Nav';
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

/* 
https://github.com/michalsnik/aos#animations
npm i aos --save
*/


const Header = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])
  return (
    <header className="Main" data-aos="fade-up">
      <div className="header-logo">

      <a href="https://www.kevinmarkkeen.com/">
  <img src={logo} className="header-logo" alt="logo" /></a>
  
      </div>
      <div className='Nav'>
        <Nav />
      </div>
      <div className="social">
        <a href="https://www.facebook.com/kevinmarkkeen/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook" style={{ fontSize: '18px' }}></i>
        </a>
        <b className="space"/>
        <a href="https://www.instagram.com/kevinmarkkeen/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram" style={{ fontSize: '18px' }}></i>
        </a>
      </div>
    </header>
  );
};




  

export default Header;
