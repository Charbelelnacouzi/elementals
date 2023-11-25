import React, { useState, useEffect } from "react";
import DiscordIcon from "/icons/discord.png";
import TwitterIcon from "/icons/twitter.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768); // Adjust the breakpoint as needed
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const renderDesktopNavbar = () => {
        return (
            <div className="navbar-links">
                <a
                    href="https://discord.com/invite/elementals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-link"
                >
                    <img src={DiscordIcon} alt="Discord" />
                </a>
                <a
                    href="https://twitter.com/Elementals_NFT_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-link"
                >
                    <img src={TwitterIcon} alt="Twitter" />
                </a>
            </div>
        );
    };

    const renderMobileNavbar = () => {
        return (
            <>
                <button className="menu-icon" onClick={handleMenuToggle}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`menu-icon-svg ${isMenuOpen ? "open" : ""}`}
                    >
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
                <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
                    <button className="close-menu" onClick={handleMenuToggle}>
                        Close
                    </button>
                    <a
                        href="https://discord.com/invite/elementals"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-link"
                    >
                        <img src={DiscordIcon} alt="Discord" />
                    </a>
                    <a
                        href="https://twitter.com/Elementals_NFT_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-link"
                    >
                        <img src={TwitterIcon} alt="Twitter" />
                    </a>
                </div>
            </>
        );
    };

    return (
        <nav className="navbar">
            <div>
                <img src="/logo.png" width="60px" alt="Logo" />
            </div>
            {isDesktop ? renderDesktopNavbar() : <>{renderMobileNavbar()}</>}
        </nav>
    );
};

export default Navbar;
