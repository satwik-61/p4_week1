import React from "react";
import "./Hero.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import heroImage2 from '../Assets/hero_image2.jpg';
import heroImage3 from '../Assets/hero_image3.jpg';
import heroImage4 from '../Assets/hero_image4.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img src={heroImage2} alt="Exclusive Offers" />
          <p className="legend">Exclusive Offers</p>
        </div>
        <div>
          <img src={heroImage3} alt="Best Sellers" />
          <p className="legend">Best Sellers</p>
        </div>
        <div>
          <img src={heroImage4} alt="Top picks" />
          <p className="legend">Top Picks</p>
        </div>
      </Carousel>
      <div className="hero-content">
        <h4>Discover Our Latest Collections</h4>
        <button className="hero-button">Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;