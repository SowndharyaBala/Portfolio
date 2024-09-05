import React from 'react';
import "./FooterStyles.css";
import {  FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>NO.9, Mahalakshmi Nagar, Orikkai</p>
              <p>Kanchipuram</p>
            </div>
          </div>

          <div className='phone'>
            <h4>
              <FaPhone 
                size={20} 
                style={{ color: "#fff", marginRight: "2rem" }} 
              />
              +91 7418694357
            </h4>
          </div>

          <div className='email'>
            <h4>
              <FaMailBulk 
                size={20} 
                style={{ color: "#fff", marginRight: "2rem" }} 
              />
              sowndharya0490@gmail.com
            </h4>
          </div>
        </div>
        <div className='social'>
            <FaInstagram
            size={30} 
            style={{ color: "#fff", 
            marginRight: "1rem" }} 
            />

            <FaLinkedin 
             size={30} 
             style={{ color: "#fff", 
             marginRight: "1rem" }} 
            />

            <FaLinkedin 
             size={30} 
             style={{ color: "#fff", 
             marginRight: "1rem" }} 
            />
        </div>
      </div>
    </div>
  );
}

export default Footer;
