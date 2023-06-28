import React from "react";
import logo from '../assets/logo.png'
import phone from '../assets/phone.png'
import linkedinCommunity from '../assets/linkedin-community.jpg'
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav_main">
     <Link to={'/'}>
      <img src={logo} alt="logo" className="logo" />
      </Link>
      
      <div className="nav_ul">
      <Link to={'tel:5551234567'} className="phone_route">
        <img src={phone} alt="phone" className="phone_img" />
        </Link>
        <Link to={'/linkedin_community'} className="linkedin_community_route">
        <img src={linkedinCommunity} alt="phone" className="linkedin_community" />
        </Link>
      </div>
      
    </div>
  );
};

export default Nav;
