import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";

import Heading from '../Heading'
import '../../css/services.css'
import '../../css/swiper_scroller.css'

export default function Services({ items }) {
    function ServiceCard({ image, title, content }) {
        return (
            <div className="image-container" style={{ backgroundImage: 'url(\'' + image + '\')'}} >
                <div className="blur-overlay"></div>
                <div className="overflow">
                    <h3>{title}</h3>
                    <span>{content}</span>
                </div>
            </div>
        )
    }
    return (
        <div id="services">
            <Heading title='Our Popular Services' />
            {/* <?php echo cHeader('Our Popular Services', false, './booking.php', null); ?> */}

            <div className="sw-con">

                <Swiper
                    slidesPerView='auto'
                    updateOnWindowResize={true}
                    freeMode={true}
                    navigation={true}
                    modules={[FreeMode, Navigation]}
                    className="lpw services-slider lwiper-container page-container"
                >

                    <div >
                        <div className="swiper-wrapper">

                            {items.map(e => <SwiperSlide className='service-card'>

                                <h4>Pre-Bridal Basic</h4>
                                <span>{e} Hour</span>
                                <div>
                                    <h5>Rs.400</h5>
                                    {/* <div className="add-btn-group" sid_btn="${category.sid}">
                                  <div className="counter-group">
                                      <button sid="${category.sid}" className="b-btn hard inverse minus-btn">-</button>
                                      <div>0</div>
                                      <button sid="${category.sid}" className="b-btn hard inverse plus-btn">+</button>
                                  </div>
                                  <button sid="${category.sid}" className="b-btn hard inverse add-btn" style="visibility:visible">ADD</button>
                              </div> */}
                                </div>
                            </SwiperSlide>)}
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </Swiper>
            </div>

            <Heading title='We Provide the Best' isCenter={true} />
            {/* <?php cHeader('We Provide the Best', true, null, null); ?> */}
            <div className="page-container small-page services-grid" data-aos="fade">
                {ServiceCard({ image: '../images/pic.png', title: 'Facial', content: 'Lorem ipsum dolor sit amet consectetur adipisicing.' })}
                {ServiceCard({ image: '../images/pic.png', title: 'Facial', content: 'Lorem ipsum dolor sit amet consectetur adipisicing.' })}
                {ServiceCard({ image: '../images/pic.png', title: 'Facial', content: 'Lorem ipsum dolor sit amet consectetur adipisicing.' })}
                {ServiceCard({ image: '../images/pic.png', title: 'Facial', content: 'Lorem ipsum dolor sit amet consectetur adipisicing.' })}
                {ServiceCard({ image: '../images/pic.png', title: 'Facial', content: 'Lorem ipsum dolor sit amet consectetur adipisicing.' })}
                {ServiceCard({ image: '../images/pic.png', title: 'Facial', content: 'Lorem ipsum dolor sit amet consectetur adipisicing.' })}

            </div>
        </div>
    )
}




