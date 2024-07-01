import React from 'react'
import Heading from '../Heading'
import FeatureCard from './FeatureCard'


import '../../css/about.css'
import pic from "../../images/bg.png";

export default function About() {
  return (
      <div id="about">
          {/* <Heading title='About Me' isCenter={true}/> */}

          <div className="page-container small-page about-grid" data-aos="fade-up">
              <div className="image-container">
                  <img src={pic} alt="About" data-aos="zoom-in" />
              </div>
              <div>
                  <FeatureCard title='Personal Details' content='Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add.' icon='fa-shield'/>

              </div>
          </div>
      </div>
  )
}
