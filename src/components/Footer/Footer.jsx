import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/icon.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 justify-between flex flex-col sm:flex-row">
            
            <aside className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="h-8 w-8" />
                <p>Copyright © 2025 - All rights reserved</p>
            </aside>

            <nav className="flex gap-4 mt-3 sm:mt-0 text-sm">
                <Link to="/" className="hover:underline">Terms & Conditions</Link>
                <Link to="/" className="hover:underline">Privacy Policy</Link>
            </nav>

            <div className="flex gap-4 mt-3 sm:mt-0 text-lg">
                <a href="https://facebook.com" target="_blank" className="hover:text-[#8c52ff] transition-colors">
                    <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" className="hover:text-[#8c52ff] transition-colors">
                    <FaTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" className="hover:text-[#8c52ff] transition-colors">
                    <FaLinkedinIn />
                </a>
                <a href="https://instagram.com" target="_blank" className="hover:text-[#8c52ff] transition-colors">
                    <FaInstagram />
                </a>
            </div>

        </footer>
    );
};

export default Footer;
