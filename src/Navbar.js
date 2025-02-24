import React, { useState } from "react";
import { Link } from 'react-router-dom';
// import './styles.css';

const Navbar = () => {
    const [isOpen, SetIsOpen] = useState(false);

    const toggleMenu = () => {
        SetIsOpen(!isOpen);
    };
    
    return (
        <nav className="navbar">
            <button className="menu-toggle" onClick={toggleMenu}>
            ☰
            </button>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={() => SetIsOpen(false)}>Home</Link></li>
                <li><Link to="/services" onClick={() => SetIsOpen(false)}>Services</Link></li>
                <li><Link to="/about" onClick={() => SetIsOpen(false)}>About</Link></li>
                <li><Link to="/gallery" onClick={() => SetIsOpen(false)}>Gallery</Link></li>
                <li><Link to="/contact" onClick={() => SetIsOpen(false)}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;