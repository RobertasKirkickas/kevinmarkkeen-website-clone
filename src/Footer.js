import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
/* 
https://github.com/michalsnik/aos#animations
npm i aos --save
*/

const Footer = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
      }, [])
    return (
        <footer>
            <div className="footer" data-aos="fade-up">
                <div className='footer-social'>
            <a href="https://www.facebook.com/kevinmarkkeen/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook" style={{ fontSize: '25px' }}></i>
        </a>
        <b className="space-footer"/>
        <a href="https://www.instagram.com/kevinmarkkeen/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram" style={{ fontSize: '25px' }}></i>
        </a>
        </div>
            </div>
            <div className="copyright" data-aos="fade-up">
                Copyright &copy; 2021 Kevin Mark Keen. All rights reserved.
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="copyright">
            <a href='https://www.kevinmarkkeen.com/'>www.kevinmarkkeen.com</a>
            </div>
        </footer>
    );
};

export default Footer;