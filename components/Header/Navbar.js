import React from 'react';
import logo from '../../Logo.png'
import Navbarcss from './Navbarcss.css'
import { NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container">
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li><NavLink to="/home">Velkommen</NavLink></li>
                    <li><NavLink to="/nyhed">Nyhed</NavLink></li>
                    <li><NavLink to="/aktiviteter">Aktiviter</NavLink></li>
                    
                </ul>
            </nav>
        </div>
    );
}

export default withRouter(Navbar);