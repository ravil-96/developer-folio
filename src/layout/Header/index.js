import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css'

const Header = () => {
     return (
        <>
        <h1 id="my-name" class="header">Ravil Shafiyev</h1>
        <nav>
        <NavLink exact to="/" activeClassName="current">Home</NavLink>
        <NavLink to="/about_me" activeClassName="current">About Me</NavLink>
        <NavLink to="/projects" activeClassName="current">Projects</NavLink>
        <NavLink to="/news" activeClassName="current">Contact</NavLink>
        </nav>
        </>
     );
}

export default Header;