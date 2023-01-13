import BodyGrid from './components/BodyGrid';
import Items from './DisplayImages.js';
import React from "react";


const Body = () => {

    return (
      <div className="grid-container">
        {Items.map((props) => {
          return <BodyGrid img={props.img} />
        })}
      </div>
    );
  }
  
  export default Body;
  
  