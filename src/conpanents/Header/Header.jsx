import React from 'react';
import './Header.css';
import logo from "../img/glav.png";
import { useState } from 'react';
import login from "../img/glav.png";
function Header() {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };



    return (
        <header className="header">
            <img className='header__img' src={logo} alt="" />
            <div className="container">
                <div
                    className={`burger-icon ${isOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="header__tayp">
                    <ul className='header__ul'>
                        <div className={`menu ${isOpen ? "show" : ""}`} onTouchEnd={closeMenu} >   
                            <img className='header__ul-img menu-logo #contact' style={{ display: window.innerWidth >= 1024 ? "none" : "block", }} src={login} alt="Menu Logo" />
                            <li className='header__ul-li #home'>Мурской</li>
                            <li className='header__ul-li #about'>Женски</li>
                            <li className='header__ul-li #services'>Детски</li>
                            <img className='header__imgs' src="https://allopizza.su/img/cart-mob.svg" alt="" />
                        </div>
                    </ul>
                </div>

            </div>
        </header>
    );
}

export default Header;
