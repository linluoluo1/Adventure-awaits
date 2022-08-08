import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from "../videos/video-2.mp4";

 function HeroSection() {
  return (
    <div className='hero-container' >
        { <video src={video} autoPlay loop muted /> }
{/* <video src={'../../public/videos/video-2.mp4'} autoPlay loop muted />  */}
      <h1> ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btn'>
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'  > GET STARTED</Button>

        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'  > WATCH TRAILER <i className='far fa-play-circle'/> </Button>

      </div>
    </div>
  )
}

export default HeroSection;