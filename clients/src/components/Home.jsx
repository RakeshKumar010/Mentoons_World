import React from "react"; 
import Nav from "./Nav";
import Background from "../assets/background.png";
import heading from "../assets/txt.png";
import boy from "../assets/boy.png";
import balance_txt from "../assets/balance_txt.png";
import key from "../assets/key.png";
import desktop from "../assets/desktop.png";
import star from "../assets/home page-25.png";
import rocket_left from "../assets/home page-04.png";
import rocket_right from "../assets/home page-07.png";
import curv_rope from "../assets/web home page YELLOW-02.png";
import rope from "../assets/home page-08.png";
import book from "../assets/home page-05.png";
import red_bubble from "../assets/home page-06.png";
import yellow_bubble from "../assets/home page-09.png";
import girl from "../assets/girl.png";
import man_i from "../assets/man_1.png";
import man_ii from "../assets/man_2.png";
import ball from "../assets/home page-03.png";
import song from "../assets/song.mp3";
import HomeFooter from "./HomeFooter";
import logo from '../assets/logo.png'

const Home = () => {
    setTimeout(()=>{
        
        let right_content_i_id =document.getElementById('right_content_i_id')
        let right_content_ii_id =document.getElementById('right_content_ii_id')
        right_content_i_id.style.display="block"
        right_content_ii_id.style.display="none"
        
    },9000)
  return (
    <div
      className="home_main"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Nav logo={logo} />
      <div className="home_body">
        <div className="left_content">
          <img src={heading} alt="heading" className="heading" />

          <p className="paragraph">
            @ Mentoons, we are committed to engaging with children <br />
            with social media addiction, gaming addiction, mobile <br />
            phone addiction, we work with families and communities to <br />
            ensure kids are the healthiest version of themselves.{" "}
          </p>

          <div className="balance_and_key">
            <img src={balance_txt} alt="balance_txt" className="balance_txt" />
            <img src={key} alt="key" className="key" />
          </div>
        </div>
        <div className="right_content_i" id="right_content_i_id">
          <img src={boy} alt="boy" className="boy" />

          <img src={desktop} alt="desktop" className="desktop desktop_i"  />
          <img src={star} alt="star" className="star star_1" />
          <img src={star} alt="star" className="star star_2" />
          <img src={star} alt="star" className="star star_3" />
          <img src={star} alt="star" className="star star_4" />
          <img src={star} alt="star" className="star star_5" />

          <img src={rocket_right} alt="rocket_right" className="rocket_right" />
          <img src={rope} alt="rope" className="rope" />

          <img src={rocket_left} alt="rocket_left" className="rocket_left" />
          <img src={curv_rope} alt="curv_rope" className="curv_rope" />
          <img src={book} alt="book" className="book" />
          <img src={red_bubble} alt="red_bubble" className="red_bubble" />
          <img
            src={yellow_bubble}
            alt="yellow_bubble"
            className="yellow_bubble"
          />
          <img src={ball} alt="ball" className="ball" />
        </div>
        <div className="right_content_ii" id="right_content_ii_id">
        <img src={desktop} alt="desktop" className="desktop desktop_ii" />
        <img src={girl} alt="girl" className="girl" />
        <img src={man_i} alt="man_i" className="man_i" />
        <img src={man_ii} alt="man_ii" className="man_ii" />

        </div>
      </div>
      <HomeFooter />
     
 
    </div>
  );
};

export default Home;
