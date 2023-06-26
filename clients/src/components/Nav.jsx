import React from "react";
import workshop from "../assets/workshop.png";
import comics from "../assets/comics.png";
import join from "../assets/join.png";
import { Link } from "react-router-dom";
const Nav = ({ logo }) => {
  return (
    <div className="nav_main">
      <img src={logo} alt="logo" className="logo" />

      <div className="nav_ul">
       
        <Link to="/podcast">
          <img src={workshop} alt="workshop" className="route workshop_route" />
        </Link>
        <Link to="comics">
          <img src={comics} alt="comics" className="route" />
        </Link>
        <Link to={"/join"}>
          <img src={join} alt="join" className="route" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
