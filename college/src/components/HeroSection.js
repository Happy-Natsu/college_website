import React from 'react';
import '../App.css';
//import { Button } from './Button';
import './HeroSection.css';
import Video from './videos/video-3.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={Video} autoPlay loop muted></video>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br>
      <h1>75 Years of Glory</h1>
      <p>Platinum Jubli</p>
    </div>
  );
};

export default HeroSection;