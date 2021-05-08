import React from 'react';
import { FeaturedStory, TruthsAndLies } from '../../components';
import './style.css';

const Bio = () => {

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
            {/* <div class="column side">
                <TruthsAndLies />
            </div> */}
        </div>
      </div>
    </>
    );
};

export default Bio;
