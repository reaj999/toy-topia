import React from 'react';
import logo from '../../assets/icon.png'

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 justify-center">
            <aside className="grid-flow-col items-center">
                <img src={logo} alt="" className='h-8, w-8'/>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
        </footer>
    );
};

export default Footer;