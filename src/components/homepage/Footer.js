import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/footer.css'

export default function Footer() {

    return (
        <footer id='about'>
            <div className="page-container">
                <div className="footer-grid">
                    <div>
                        <h2 className="footer-grid-title">Shubham Gupta</h2>

                        <div className="footer-timing">
                            <p>A passionate Mobile App Developer 🚀 having an experience of building Web and Mobile applications with Flutter / Android (Kotlin) / React and some other cool libraries and frameworks.</p>
                        </div>

                        <div className="footer-timing social-links">
                            <a target="_blank" href={'https://stackoverflow.com/users/12078109/shubham-gupta'} className="fb" data-aos="fade-up" data-aos-delay='600'> <i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a target="_blank" href={'https://github.com/shubham-gupta-16'} className="yt" data-aos="fade-up" data-aos-delay='650'> <i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                            <a target="_blank" href={'https://www.instagram.com/shubham_g_16/'} className="ig" data-aos="fade-up" data-aos-delay='700'> <i className="fa fa-instagram" aria-hidden="true"></i></a>
                            <a target="_blank" href={'https://twitter.com/shubham_g16'} className="tw" data-aos="fade-up" data-aos-delay='750'> <i className="fa fa-twitter" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div></div>
                    {/* <div>
                        <h2 className="footer-grid-title">Opening Hours</h2>

                        <div className="footer-timing">
                            <span>Monday to Saturday</span>
                            <h4>8AM - 8PM</h4>
                        </div>

                        <div className="footer-timing">
                            <span>Sunday and Holidays</span>
                            <h4>8AM - 10AM</h4>
                        </div>

                    </div> */}

                    <div>
                        <h2 className="footer-grid-title">Get in Touch</h2>

                        <div className="footer-timing">
                            <span>Naibasti, Madhiya, Parao,</span>
                            <span>Varanasi, Uttar Pradesh, India</span>
                        </div>

                        <div className="footer-timing">
                            <span>shubham.developer16@gmail.com</span>
                        </div>

                        <div className="footer-timing">
                            <span>+91 8318-58-6081</span>
                        </div>
                    </div>
                </div>
                <div className="credits">
                    <p>© Website developed by - Shubham Gupta</p>
                </div>
            </div>
        </footer>
    )
}
