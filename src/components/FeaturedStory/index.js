import React, { useState } from 'react';
import BackButton from '../BackButton';

export default function FeaturedStory() {
    // const storiesData = [{id: 1, title: "About Me", body: "Tech savvy and an extroverted introvert, ordinary engineering graduate during day, dancer under cover of the night... As you can see, to describe myself as an individual is not an easy task! I am a person who finds inspiration in stories about travel and loves watching birds yet I am also an unstoppable city walker and dancing enthusiast listening to music most of my free time. How does that relate to coding, you would ask? Strangely but it all does come together in my mind. Physical sensations of colors, tastes, sounds and smells create excitation. After recharging my energies in quiet, I go out to take in London cityscapes either by walking or dancing. That inspires visions of life in me. Those visions make me realise possibilities for new designs yet to be realised - designs that can be silly and old or sometimes brave and bold. For most of the times, those designs require coding. And here I am, applying for software developer job and hoping that Futureproof will become my springboard into the future."},
    //                      {id: 2, title: "Spider-Man", body: "While the recasting of both Alfred Molina and Jamie Foxx in the villainous roles they played in previous non-Marvel Cinematic Universe Spider-Man films corroborates this, there has been no official word on whether Tobey Maguire or Andrew Garfield would be appearing as their versions of the web-slinger alongside Holland in the sequel."},
    //                      {id: 3, title: "Weather is right", body: "Wow! Sunshine! The spring has finally arrived!"}]

    const [story, setStory ] = useState("Tech savvy and an extroverted introvert, ordinary engineering graduate during day, dancer under cover of the night... As you can see, to describe myself as an individual is not an easy task! I am a person who finds inspiration in stories about travel and loves watching birds yet I am also an unstoppable city walker and dancing enthusiast listening to music most of my free time. How does that relate to coding, you would ask? Strangely but it all does come together in my mind. Physical sensations of colors, tastes, sounds and smells create excitation. After recharging my energies in quiet, I go out to take in London cityscapes either by walking or dancing. That inspires visions of life in me. Those visions make me realise possibilities for new designs yet to be realised - designs that can be silly and old or sometimes brave and bold. For most of the times, those designs require coding. And here I am, applying for software developer job and hoping that Futureproof will become my springboard into the future.");
    
    return (
        <article aria-label="featured story" id="feature">
            <BackButton />
            <p>{ story } </p>
        </article>
    )
};

