import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pizzaLogo.png";
import  "../styles/Navbar.css";
import { useState } from "react";
import { UilBars } from '@iconscout/react-unicons'

const Navbar = () => {
    const[openLink,setOpenLink]=useState(false);
    const toggleNavbar=()=>{
        setOpenLink(!openLink);
    }
  return (
    <>
      <div className="navbar">
        <div className="leftSide" id={openLink? "open" : "close"}>
          <img src={Logo} alt="logo" />
          <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={toggleNavbar}>
            <UilBars/>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
