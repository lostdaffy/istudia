import React from "react";
import "./Hero.css";
import hero_img_1 from "../../assets/hero-img-1.png";
import hero_img_2 from "../../assets/hero-img-2.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrap">
        <div className="hero-text">
          <div className="hero-text-1">
            <span>100% Satisfaction Guarantee</span>
            <h1>
              Learn <span>Skills</span> From Our Top Instructors
            </h1>
            <p>
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattisBorem ipsum dolor sit amet
              consectetur adipiscing area we followelit.
            </p>
          </div>
          <div className="hero-text-2">
            <a href=""><i class="ri-search-line"></i> Explore Courses</a>
          </div>
        </div>
        <div className="hero-img">
          <img src={hero_img_2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
