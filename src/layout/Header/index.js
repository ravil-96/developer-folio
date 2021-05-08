import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css'

const Header = () => {
     return (
        <>
        <header>
        <img id="my-name" src="https://fontmeme.com/permalink/210503/e6a49f78a878b1f6e6d9b060deadd47b.png" alt="my_name" width="200"></img>
        <nav>
        <NavLink exact to="/" activeClassName="current">Home</NavLink>
        <NavLink to="/bio" activeClassName="current">Bio</NavLink>
        <NavLink to="/projects" activeClassName="current">Projects</NavLink>
        <NavLink to="/contact" activeClassName="current">Contact</NavLink>
        </nav>
        </header>
        </>
     );
}

export default Header;