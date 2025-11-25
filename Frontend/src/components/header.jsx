import React from 'react';
import '../style/components.css';

function Header() {
  return (
    <header className="header">
        <div className="nav-container">

            <div className="logo">
            <span className="logo-red">Nolhan</span>Dev
            </div>

            <div className="right-section">
            <nav className="nav-links">
                <a href="#presentation">Présentation</a>
                <a href="#service">Service</a>
                <a href="#projects">Projects</a>
                <a href="#login">Login</a>
            </nav>

            <button className="signup">Sign up</button>
            </div>

        </div>
    </header>
  );
}


export default Header;