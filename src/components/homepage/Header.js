import React from 'react'

import "../../css/header.css";
import "../../css/button.css";
import pic from "../../images/pic.png";

export default function Header({ title }) {
  return (
      <header id="home">
          <div className="page-container">
              <div className="header-content">
                  <div className="text-content">
                      <h1 className="header-title">{title} Beauty Studio & Makeup</h1>
                      <p className="header-body">
                          Lorem ipsum dolor dummy text to enable scrolling, sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div>
                          <a href="#services" className="b-btn hard">BOOK NOW</a>
                          <a href="#about" style={{marginLeft: '15px'}} className="b-btn hard inverse">FIND MORE</a>
                      </div>
                  </div>
                  <div className="header-image">
                      <img src={pic} alt="Header"/>
                  </div>
              </div>
          </div>
      </header>
  )
}
