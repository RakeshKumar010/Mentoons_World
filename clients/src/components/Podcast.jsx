import React from "react";
import PodcastNav from "./PodcastNav";
import earphonegirl from "../assets/img_05.png";
import guided from "../assets/img_01.png";
import img_02 from '../assets/img_02.png'
import img_03 from '../assets/img_03.png'
import img_06 from '../assets/img_06.png'
import img_07 from '../assets/img_07.png'
import song from "../assets/song.mp3";

import img_08 from '../assets/img_08.png'
const Podcast = () => {
  return (
    <div className="podcast_main">
      <PodcastNav />
      <div className="podcast_content">
        <img src={earphonegirl} alt="earphonegirl" className="earphonegirl" />
        <div className="podcast_right_contaner">
          <div className="guided">
            <img src={guided} alt="guided" className="guided_img" />
            <p className="podcast_para">
              Interactive platform where people in real situations share their
              experiences, <br />
              tips and tools about navigating their way through childhood and
              parenting
            </p>
          </div>
          <div className="mac">
            <img src={img_03} alt="img_03" className="img_03" />
            <img src={img_02} alt="img_02" className="img_02" />
          </div>
          <div className="podcast_video_contaner">
            <img src={img_06} alt="img_06" className="img_06 podcast_video" />
            <img src={img_07} alt="img_07" className="img_07 podcast_video" />
            <img src={img_08} alt="img_08" className="img_08 podcast_video" />

          </div>
        </div>
      </div>
      <audio autoPlay  loop>
        <source src={song} type="audio/mp3" />
     </audio>
    </div>
  );
};

export default Podcast;