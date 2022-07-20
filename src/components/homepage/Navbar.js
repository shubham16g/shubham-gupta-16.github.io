import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../css/navbar.css'
// import { ReactComponent as logo } from '../../assets/s_3.svg'

export default function Navbar({ title, onSignInClicked, onLoading }) {

    

    var navAlwaysCollapsed = false

    let location = useLocation()
    if (location.pathname === '/') {
        navAlwaysCollapsed = false;
    }

    const [isMenuOpend, setMenuOpen] = useState(false);
    const [isCollapsed, setCollapsed] = useState(navAlwaysCollapsed);

    const handleScroll = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            setCollapsed(true);
        } else {
            setCollapsed(false);
        }
    }

    if (!navAlwaysCollapsed)
        window.addEventListener("scroll", handleScroll);



    let navItems = navAlwaysCollapsed ? <></> :
        <div id="navbar-menu" className={isMenuOpend ? 'open' : ''}>
            <a className="header-item link" href="#home">Home</a>
            <a className="header-item link" href="#about">About</a>
            <a className="header-item link" href="#services">Services</a>
            <a className="header-item link" href="#testimonials">Testimonials</a>
            <a className="header-item link" href="#contact-us">Contact Us</a>
        </div>
        

    return (
        <nav id="page-navbar" className={isCollapsed ? 'collapsed' : ''}>
            
            <div id="navbar-contents" className={isCollapsed ? 'page-container collapsed' : 'page-container'}>
                <div className="navbar-section">

                    

                    {/* todo php code here */}
                    <Link to={navAlwaysCollapsed ? './' : '#home'} id="navbar-logo" className={isCollapsed ? 'collapsed' : ''}>
                        
                    </Link>


                </div>
                <div className="navbar-section">
                    {navItems}

                    <Link to={'/resume'} target="_blank" onClick={onSignInClicked} className="header-item btn">Resume</Link>
                    {navAlwaysCollapsed ? <></> :
                        <div id="menu-btn" onClick={() => {
                            setMenuOpen(!isMenuOpend)
                        }} className={isMenuOpend ? 'menu-btn open' : 'menu-btn'}>
                            <div className="menu-btn__burger"></div>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}
