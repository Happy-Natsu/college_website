import React from 'react';
import './Footer.css';
//import { Button } from './Button';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>College sites</h2>
            <a href='https://www.jntua.ac.in/'>University Site</a>
            <a href='http://www.jntuacea.ac.in/'>College Site</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <a href='https://youtu.be/yGtKHvadC9g'>Memories</a>
            <a href='https://youtu.be/u27aFvfVzjE'>Geetham</a>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://instagram.com/jntua_pro?utm_medium=copy_link'>Instagram</a>
            <a href='https://www.facebook.com/Jntua_official-108370304891223'>Facebook</a>
            <a href='https://twitter.com/jntuacea'>Twitter</a>
            <a href='https://www.linkedin.com/in/jntua-cea-a36606168/'>Linkedin</a>
            <a href='https://www.youtube.com/channel/UC_OHiczVphbfnIEmFtzJKYQ'>YouTube</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;