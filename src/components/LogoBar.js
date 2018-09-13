import React from 'react'
import logo from '../assets/logo.png';
import './LogoBar.css';

const logoBar = () => (
    <div className="logo-bar">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
    </div>
);

export default logoBar;