import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    // Function to scroll to a specific section on the same page
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <p onClick={() => scrollToSection('home')}>Home</p>
                    <p onClick={() => scrollToSection('wgpt3')}>What is GPT3?</p>
                    <p onClick={() => scrollToSection('possibility')}>Open AI</p>
                    <p onClick={() => scrollToSection('features')}>Case Studies</p>
                    <p onClick={() => scrollToSection('blog')}>Library</p>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <p onClick={() => scrollToSection('home')}>Home</p>
                            <p onClick={() => scrollToSection('wgpt3')}>What is GPT3?</p>
                            <p onClick={() => scrollToSection('possibility')}>Open AI</p>
                            <p onClick={() => scrollToSection('features')}>Case Studies</p>
                            <p onClick={() => scrollToSection('blog')}>Library</p>
                        </div>
                        <div className="gpt3__navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
