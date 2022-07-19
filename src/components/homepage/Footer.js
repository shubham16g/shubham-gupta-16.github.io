import React from 'react'
import '../../css/footer.css'

export default function Footer() {

    return (
        <footer id='about'>
            <div className="page-container">
                <div className="footer-grid">
                    <div>
                        <h2 className="footer-grid-title">celebrino</h2>

                        <div className="footer-timing">
                            <p>Lorem ipsum dolor dummy text to enable scrolling, sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>

                        <div className="footer-timing social-links">
                            <a href={'./'} className="fb"> <i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href={'./'} className="yt"> <i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                            <a href={'./'} className="ig"> <i className="fa fa-instagram" aria-hidden="true"></i></a>
                            <a href={'./'} className="tw"> <i className="fa fa-twitter" aria-hidden="true"></i></a>
                        </div>

                    </div>
                    <div></div>
                    <div>
                        <h2 className="footer-grid-title">Opening Hours</h2>

                        <div className="footer-timing">
                            <span>Monday to Saturday</span>
                            <h4>8AM - 8PM</h4>
                        </div>

                        <div className="footer-timing">
                            <span>Sunday and Holidays</span>
                            <h4>8AM - 10AM</h4>
                        </div>

                    </div>

                    <div>
                        <h2 className="footer-grid-title">Get in Touch</h2>

                        <div className="footer-timing">
                            <span>Ashirwad Complex, Kerakatpur Lohta,</span>
                            <span>Varanasi, Uttar Pradesh, India</span>
                        </div>

                        <div className="footer-timing">
                            <span>celebrino@gmail.com</span>
                        </div>

                        <div className="footer-timing">
                            <span>+91 98981 23456</span>
                        </div>
                    </div>
                </div>
                <div className="credits">
                    <p>© 2021 Celebrino. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
