import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import storiesData from './data';
import BackButton from '../BackButton';

export default function FeaturedStory() {
    const [story, setStory ] = useState();
    
    const params = useParams()

    const data = storiesData;

    useEffect(() => {
        setStories (data)
    }, [params])

    return (
        <article aria-label="featured story" id="feature">
            <BackButton />
            <h3>{ story.title }</h3>
            <p>{ story.body} </p>
        </article>
    )
};