import React from 'react'
import Heading from '../Heading'
import FeatureCard from './FeatureCard'


import '../../css/about.css'
import pic from "../../images/pic.png";

export default function About() {
  return (
      <div id="about">
          <Heading title='Why Choose Us' isCenter={true}/>

          <div className="page-container small-page about-grid" data-aos="fade">
              <div className="image-container">
                  <img src={pic} alt="About"/>
              </div>
              <div>
                  <FeatureCard title='Experienced Staff' content='Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add.' icon='fa-shield'/>
                  <FeatureCard title='Pre Booking Online' content='Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add.' icon='fa-check-square-o'/>
                  <FeatureCard title='Affordable Cost' content='Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add.' icon='fa-inr'/>

              </div>
          </div>
      </div>
  )
}
