import React from 'react';
import './navbar.css';
import bullLogo from '../../assets/bull-logo.png';


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='img-bull'>
                <img src={bullLogo} alt="" />
            </div>
            <div className='nav-links'>
                <ul>
                    <li>NOSOTROS</li>
                    <li>CLIENTES</li>
                    <li>NUESTRO TRABAJO</li>
                    <li>BLOGS</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
