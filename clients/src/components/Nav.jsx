import React from "react";
import logo from '../assets/logo.png'
import phone from '../assets/phone.png'
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav_main">
     <Link to={'/'}>
      <img src={logo} alt="logo" className="logo" />
      </Link>
      
      <div className="nav_ul">
      <Link to={'tel:+91 90360 33300'} className="phone_route">
        <img src={phone} alt="phone" className="phone_img" />
        </Link>
       
      </div>
      
    </div>
  );
};

export default Nav;
