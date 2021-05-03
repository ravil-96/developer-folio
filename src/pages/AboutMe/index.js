import React from 'react';
import { FeaturedStory, TruthsAndLies } from '../../components';

const AboutMe = () => {

  return (
      <div class="scroll">
      <h2>About Me</h2>
      <p id="page-title">° A Dancer, a Programmer, a Walker and an Arts Enthusiast °</p>
        <div class="row">
            <div class="column"><p id="my-paragraph"><FeaturedStory /></p></div>
            <div class="column">
              <a href="https://youtu.be/YaN0EX2zZWc">
                <img id="me-in-munich" src="https://i.imgur.com/qXVyHde.jpg" alt="Me in Budapest Városliget" />
              </a>
                <TruthsAndLies />
              </div>
        </div>
      </div>
    );
};

export default AboutMe;
