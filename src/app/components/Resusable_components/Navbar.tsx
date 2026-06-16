import React from "react";
import Image from "next/image";
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <div
        className="Port_NavMain">
        <div className="Port_NavContentMain">
          <img src="./Images/Port_NavIcon.png" className='Port_Nav_contentImg' />
          Karthiyayini
        </div>
        <div className='Port_NavItems'>
          <div>Home</div>
          <div>About</div>
          <div>Projects</div>
          <div>Resume</div>
          <div>GitHub</div>
        </div>
        <div className="Port_NavHidded">3</div>
      </div>
      
    </div>
  );
}

export default Navbar;
