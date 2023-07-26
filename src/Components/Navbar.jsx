import React from "react";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-logo-container">Logo</div>
            <div className="navbar-links-container">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
