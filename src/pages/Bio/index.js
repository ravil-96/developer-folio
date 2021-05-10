import React from 'react';
import { FeaturedStory } from '../../components';
import { useHistory } from 'react-router-dom';
import './style.css';

const Bio = () => {

  const history = useHistory();
  
  function handleClick(e) {
    e.preventDefault()
    history.push("/");
  }

  function handleClick2(e) {
    e.preventDefault()
    history.push("/projects");
  }

  return (
      <>
      <h2>Bio</h2>
      <div class="scroll">
        <div class="row">
            <div class="column">
                <p id="my-paragraph"><FeaturedStory /></p>
            </div>
            <div class="column">
                <img id="me-in-munich" src="https://i.imgur.com/qXVyHde.jpg" alt="Me in Budapest Városliget" />
            </div>
        </div>
      </div>
      <a href="/" onClick={handleClick} className="portfolio-button"><img id="back-button" src="https://i.imgur.com/IIFrQH6.png" width='70px'/></a>
      <a href="/" onClick={handleClick2} className="portfolio-button"><img id="forward-button" src="https://i.imgur.com/S8uTPW6.png" width='70px'/></a>
    </>
    );
};

export default Bio;
