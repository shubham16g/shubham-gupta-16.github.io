import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

import Heading from '../Heading'
import '../../css/testimonials.css'
import '../../css/swiper_scroller.css'

export default function Testimonials() {
  return (
      <div id="testimonials">
          <Heading title='What our Clients Say' isCenter={true}/>

          <div className="page-container t-slide-mob">

              <div className="sw-con">

                  <Swiper
                      slidesPerView='auto'
                      centeredSlides={true}
                      loop={true}
                      autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                      }}
                      loopFillGroupWithBlank={true}
                      pagination={{
                          clickable: true,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="lpw testimonial-slider lwiper-container page-container">
                      <div className="swiper-wrapper">
                          {/* <?php for ($i = 0; $i < 5; $i++) { ?> */}
                          <SwiperSlide className="swiper-slide testimonial-card">
                              <div className="t-user">
                                  <div className="t-img">
                                      {/* <!-- <img src="ad.png"> --> */}
                                  </div>
                                  <div className="t-info">
                                      <h4>User Name</h4>
                                      <span>@user_handle</span>
                                  </div>
                              </div>
                              <span>
                                  Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme.
                              </span>
                          </SwiperSlide>
                          {/* <?php } ?> */}
                          <SwiperSlide className="swiper-slide testimonial-card">
                              <div className="t-user">
                                  <div className="t-img">
                                      {/* <!-- <img src="ad.png"> --> */}
                                  </div>
                                  <div className="t-info">
                                      <h4>User Name</h4>
                                      <span>@user_handle</span>
                                  </div>
                              </div>
                              <p>Themes and styles also help keep your document coordinated. When you click Design.</p>
                          </SwiperSlide>
                      </div>
                  </Swiper>
              </div>
          </div>
      </div>
  )
}
