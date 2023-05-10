import React from "react";
import Bg from './About.jpg';
import "./about.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Bg})` }}
      ></div>
      <div className="aboutBottom">
       
        <h2>Curious to buy Jcb spare parts? </h2>
        <p>
        
        Sri Vinayaga  Spares has a large variety of forklift replacement parts in store to meet the need of our customer who need supplies quickly and at a low cost.
        Widely used in construction sites for lifting heavy materials, our spare parts are available in diversified specifications and dimensions as per the needs of our prestigious clients.
         We also provide a competitive range ofJCB 3dx Spare Parts, which are widely accepted for their anti-corrosive properties. 
        Our products are used in automobile industries for JCB, tractors and trucks and are made with high quality standards.
         Thus, our products are available in different specifications, sizes and dimensions in the market .
         We always recommend that genuine JCB parts are used. We supply the whole range of genuine JCB spares.
        If your JCB is outside it’s warranty period, we at HPS have no hesitation in offering genuine alternative parts. 
        Our  genuine parts meet or exceed the original JCB parts specification, and in many cases are sourced from the same manufacturer as JCB would buy from. 
        Naturally JCB can not manufacture every component for their vast range of equipment, and have to source elsewhere. 
        

        </p>
      </div>
    </div>
  );
}

export default About;