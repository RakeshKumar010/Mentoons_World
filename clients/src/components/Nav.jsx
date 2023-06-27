import React from "react";
import logo from '../assets/logo.png'

import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav_main">
     <Link to={'/'}>
      <img src={logo} alt="logo" className="logo" />
      </Link>
      

      
    </div>
  );
};

export default Nav;
