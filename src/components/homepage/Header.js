import React from 'react'

import "../../css/header.css";
import "../../css/button.css";
import content from "../../assets/content.json";
// import pic from "../../images/me_alpha.png";

export default function Header() {
    return (
        <header id="home">
            <div className="page-container">
                <div className="header-content">
                    <div className="text-content">
                        <h1 className="header-title" data-aos="fade-up" data-aos-delay='300'>{content.headerTitle}</h1>
                        <p className="header-body" data-aos="fade-up" data-aos-delay='500'>{content.headerBody}</p>
                        <div className="footer-timing social-links">
                            {content.socialLinks.map(function (object, i) {
                                return <a target="_blank" href={object.href} className={object.className} data-aos="fade-up" data-aos-delay={i * 50 + 600}>
                                    <i className={object.iconClass} aria-hidden="true"></i>
                                </a>
                            })}
                        </div>
                        <br />
                        <br />
                        <br />
                        <div>
                            <a href={content.headerButton1.href} data-aos="fade-up" data-aos-delay='900' className="b-btn hard">{content.headerButton1.text}</a>
                            <a href={content.headerButton2.href} data-aos="fade-up" data-aos-delay='1000' style={{ marginLeft: '15px' }} className="b-btn hard inverse">{content.headerButton2.text}</a>
                        </div>
                        
                    </div>
                    {/* <div className="header-image" data-aos="fade-up"> */}
                        {/* <img src={pic} alt="Header" /> */}
                    {/* </div> */}
                </div>
            </div>
        </header>
    )
}
