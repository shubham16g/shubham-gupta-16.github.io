import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../css/navbar.css'
import content from "../../assets/content.json";
// import { ReactComponent as logo } from '../../assets/s_3.svg'

export default function Navbar() {

    const [isMenuOpend, setMenuOpen] = useState(false);
    const [isCollapsed, setCollapsed] = useState(false);

    const handleScroll = () => {
        console.log('wtf');
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            setCollapsed(true);
        } else {
            setCollapsed(false);
        }
    }
    window.addEventListener("scroll", handleScroll);



    let navItems =
        <div id="navbar-menu" className={isMenuOpend ? 'open' : ''}>
            {content.navItems.map(function (object, i) {
                return <a className="header-item link" data-aos="fade-down" data-aos-delay={i * 50} href={object.href}>{object.text}</a>
            })}
        </div>


    return (
        <nav id="page-navbar" className={isCollapsed ? 'collapsed' : ''}>

            <div id="navbar-contents" className={isCollapsed ? 'page-container collapsed' : 'page-container'}>
                <div className="navbar-section">
                    {/* todo php code here */}
                    <Link to={'./'} id="navbar-logo" className={isCollapsed ? 'collapsed' : ''}>
                    </Link>
                </div>
                <div className="navbar-section">
                    {navItems}

                    <a data-aos="fade-down" data-aos-delay='250' href={'https://github.com/shubham-gupta-16'} target="_blank" className="header-item btn" rel="noopener">Resume</a>

                    <div id="menu-btn" onClick={() => {
                        setMenuOpen(!isMenuOpend)
                    }} className={isMenuOpend ? 'menu-btn open' : 'menu-btn'}>
                        <div className="menu-btn__burger"></div>
                    </div>

                </div>
            </div>
        </nav>
    )
}
