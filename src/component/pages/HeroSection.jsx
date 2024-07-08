import { Container } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../images/Clinical-hypnotherapy.webp";
import Image2 from "../images/hypnotherapy2.jpg";
import Image3 from "../images/3hero.webp";

function HeroSection() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Active l'autoplay
    autoplaySpeed: 3000, // Vitesse de l'autoplay (3000ms = 3s)
    fade: true, // Ajoute un effet de fondu entre les diapositives
    cssEase: "linear", // Assure une transition douce
  };

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        <div className="image-container">
          <img src={Image1} alt="Image1" />
          <h3>Hypnothérapie axée sur les solutions</h3>
        </div>
        <div className="image-container">
          <img src={Image2} alt="Image2" />
          <h3>Calme, confiance en soi</h3>
        </div>
        <div className="image-container">
          <img src={Image3} alt="Image3" />
          <h3>L'hypnothérapie pourrait être la solution...</h3>
        </div>
      </Slider>
    </div>
  );
}

export default HeroSection;
