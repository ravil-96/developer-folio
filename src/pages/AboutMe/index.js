import React from 'react';
import { FeaturedStory, TruthsAndLies } from '../../components';
import './style.css';

const AboutMe = () => {

  return (
      <div class="scroll">
      <h2>About Me</h2>
      <p id="page-title">° A Dancer, a Programmer, a Walker and an Arts Enthusiast °</p>
        <div class="row">
            <div class="column side"><a href="https://youtu.be/YaN0EX2zZWc">
                <img id="me-in-munich" src="https://i.imgur.com/qXVyHde.jpg" alt="Me in Budapest Városliget" />
              </a>
            </div>
            <div class="column middle">
                <p id="my-paragraph"><FeaturedStory /></p>
            </div>
            <div class="column side">
                <TruthsAndLies />
            </div>
        </div>
      </div>
    );
};

export default AboutMe;
