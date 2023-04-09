import React from 'react';
import Logo from '../images/image.png';


export default function Header() {
    return (
        <header className = "header">
            <nav className = "navi"> 
            <img src={Logo} alt="React logo" className = "nav-logo"/>
            <h3 className = "navi-logotext">React Logo</h3>
            <h4 className = "navi-text"> React Course - Project 1</h4>
            </nav>
        </header>
        
    )
}