import React from 'react';
import { FeaturedStory, TruthsAndLies } from '../../components';

const AboutMe = () => {

  return (
      <>
      <h2 id="page-title">° A Dancer, a Programmer, a Walker and an Arts Enthusiast °</h2>
        <div class="row">
            <div class="column"><p id="my-paragraph"><FeaturedStory /></p></div>
            <div class="column">
              <a href="https://youtu.be/YaN0EX2zZWc">
                <img id="me-in-munich" src="https://i.imgur.com/qXVyHde.jpg" alt="Me in Budapest Városliget" />
              </a>
              <aside>
            <TruthsAndLies />
          </aside>
            </div>
        </div>
      </>
    );
};

export default AboutMe;
