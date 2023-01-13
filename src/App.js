import { Routes, Route } from "react-router-dom";
import Header from './Header';
import './App.css';
import Body from "./Body";
import Footer from "./Footer";
import Contact from "./Contact";
import Shop from "./Shop"
/* 
https://github.com/michalsnik/aos#animations
npm i aos --save
*/

function App() {

  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={< OverviewGo />} />
      <Route path="/contact" element={< ContactGo />} />
      <Route path="/shop" element={< ShopGo />} />
    </Routes>
    </div>
  );
}

export default App;


// Pages
function OverviewGo() {

  return (
    <div className="App">
    <Header />
    <Body />
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
            <br />
            <br />
            <br />
            <br />
    <Footer />
    </div>
  );
}



function ContactGo() {

  return (
    <div className="App">
    <Header />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="copyright social" data-aos="fade-up">
For appointments and enquiries please fill out the form below.
    </div>
    <div className="contact-form" data-aos="fade-up">
    <Contact />
    </div>
    <br />
    <div className="copyright social" data-aos="fade-up">
            appointment only tattoo studio <br />
            8 westgate, Peterborough, PE1 1RA ,U.K
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
    <Footer />
    </div>
    
  );
}

function ShopGo() {

  return (
    <div className="App">
    <Header />
    <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2 class="shop-title">SHOP</h2>
            <hr class="shop-divider" />
            <div className="shop-container">
              <Shop />
            <h2 class="">TATTOO DEPOSIT</h2>
            <h3 class="">£50.00</h3>
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
            <br />
            <br />
            <br />
    <Footer />
    </div>
  );
}