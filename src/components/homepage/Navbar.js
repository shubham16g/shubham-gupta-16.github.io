import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useFireStore } from '../../contexts/FirestoreContext'
import '../../css/navbar.css'

export default function Navbar({ title, onSignInClicked, onLoading }) {

    const { currentUser, logout } = useAuth()

    const { cart } = useFireStore()
    const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

    const handleLogout = async () => {
        onLoading(true)
        try {
            await logout()
            onLoading(false)
        } catch (error) {
            onLoading(false)
            alert(error.message)
        }
    }

    var navAlwaysCollapsed = true;
    var bookingActive = '';

    let location = useLocation()
    if (location.pathname === '/') {
        navAlwaysCollapsed = false;
    } else {
        bookingActive = 'active';
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

    let userCard = currentUser == null ?
        <a href={'#sign-in'} onClick={onSignInClicked} className="header-item btn" /* onClick={visibleAuthForm} */ >Sign In</a>
        :
        <div className="header-item drop-menu">
            <div className="user-logo"></div>
            <svg className="drop-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                <path style={{fill: '#bbbbbb'}} d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                            </svg>

            <div className="drop-menu-container">
                <div className="user-data">
                    <h3>{currentUser.displayName}</h3>
                    <span className="profile-mobile">{currentUser.email}</span>
                </div>

                <div>
                    <a href="./appointments.php" style={{ textDecoration: 'none' }}><span className="menu-item">Your Appointments</span></a>
                    <span onClick={handleLogout} className="menu-item">Logout</span>
                </div>
            </div>
        </div>

    return (
        <nav id="page-navbar" className={isCollapsed ? 'collapsed' : ''}>
            
            <div id="navbar-contents" className={isCollapsed ? 'page-container collapsed' : 'page-container'}>
                <div className="navbar-section">

                    {navAlwaysCollapsed ? <></> :
                        <div id="menu-btn" onClick={() => {
                            setMenuOpen(!isMenuOpend)
                        }} className={isMenuOpend ? 'menu-btn open' : 'menu-btn'}>
                            <div className="menu-btn__burger"></div>
                        </div>}

                    {/* todo php code here */}
                    <Link to={navAlwaysCollapsed ? './' : '#home'} id="navbar-logo" className={isCollapsed ? 'collapsed' : ''}>{title}</Link>

                    {navItems}

                </div>
                <div className="navbar-section">
                    {currentUser == null ? null: <Link to={'./booking'} className={'booking-display ' + bookingActive} style={{ marginRight: currentUser == null ? '0px' : '75px' }}>
                        <span className="booking-icon">
                            <i className={!bookingActive ? 'fa fa-calendar-o' : 'fa fa-calendar'} aria-hidden="true"></i>
                        </span>
                        <span className="booking-txt">Booking</span>
                        {cartCount > 0 ? <span id="cart-count" className="booking-count">{cartCount}</span> : null}
                    </Link>}
                    {userCard}
                </div>
            </div>
        </nav>
    )
}
