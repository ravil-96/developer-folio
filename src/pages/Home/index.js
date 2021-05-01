import React from 'react';
import { BackButton, Quotes } from '../../components';

const Home = () => { 
    return (
        <div id="home-section">
        <h2>Welcome</h2> 
        <Quotes /> 
        <BackButton />
        </div>
    )
};

export default Home;
