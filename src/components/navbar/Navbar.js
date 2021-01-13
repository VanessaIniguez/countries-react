import { FaRegMoon } from 'react-icons/fa';
import React from 'react';

import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="text">Where in the world?</div>

            <div className="dark-mode">
                <FaRegMoon />
                <div className="text-dark">Dark Mode</div>
            </div>
            
        </div>
    )
}

export default Navbar;
