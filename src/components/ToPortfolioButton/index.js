import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

const ToPortfolioButton = () => {

         const history = useHistory();

         function handleClick(e) {
             e.preventDefault()
             history.push("/bio");
         }
    return <a href="/" onClick={handleClick} className="portfolio-button"><img src="https://i.imgur.com/rgjXAd1.png" width='150px'/></a>
}

export default ToPortfolioButton;