import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import'../styles/AboutUs.css'


const About = () => {
  return (
    <>
      <div className="about">
        <div
          className="aboutTop"
          style={{ backgroundImage: `url(${MultiplePizzas})` }}
        ></div>
        <div className="aboutBottom">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            corporis vel repudiandae nostrum ratione necessitatibus animi odit
            cum debitis sint quae quia possimus eius, explicabo libero
          
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
