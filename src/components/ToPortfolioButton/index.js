import React from 'react';
import { useHistory } from 'react-router-dom';

const ToPortfolioButton = () => {

         const history = useHistory();

         function handleClick(e) {
             e.preventDefault()
             history.push("/about_me");
         }
    
    return <a href="/" onClick={handleClick} className="to-portfolio-button"><img src="https://i.imgur.com/884Mrcj.png" width="30px" /></a>
}

export default ToPortfolioButton