import React from 'react';
import { ToPortfolioButton, Quotes } from '../../components';

const Home = () => { 
    return (
        <>
        <div id="home-section">
        <h2>Welcome</h2> 
        <Quotes /> 
        </div>
        <ToPortfolioButton />
        </>
    )
};

export default Home;
