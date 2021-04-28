import React from 'react';
import { FeaturedStory } from '../../components';

const AboutMe = () => {

  return (
      <>
      <h2 id="page-title">° A Dancer, a Programmer, a Walker and an Arts Enthusiast °</h2>
        <div>
        <a class="column" href="https://youtu.be/YaN0EX2zZWc">
          <img id="me-in-munich" src="https://i.imgur.com/qXVyHde.jpg" alt="Me in Budapest Városliget" />
        </a>
        </div>
        <div class="column">
             <p id="my-paragraph"><FeaturedStory /></p>
        </div>
        <a id="back-to-top" href="#topnav">Back to Top</a>
      </>
    );
};

export default AboutMe;
