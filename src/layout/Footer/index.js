import React from 'react';
import { TruthsAndLies } from '../../components';
import './style.css';

const Footer = () => {
    return (
        <>
        <TruthsAndLies />
        <img id="pow" class="image-align" src="https://i.imgur.com/IFqIGsR.png" alt="POW!" />  
        <p class="footer">Contact info</p>
        </>
    );
}

export default Footer;