import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

const ToPortfolioButton = () => {

         const history = useHistory();

         function handleClick(e) {
             e.preventDefault()
             history.push("/bio");
         }
    return <a href="/" onClick={handleClick} className="portfolio-button"><img id="portfolio-button" src="https://i.imgur.com/S8uTPW6.png" width='150px'/></a>
}

export default ToPortfolioButton;