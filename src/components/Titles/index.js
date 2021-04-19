import React, { useState } from 'react';

const Titles = ({ handleSelect }) => {
    const [ stories, setStories ] = useState([])
    
    const data = [{id: 1, title: "About Me", snippet: "Tech savvy and an extroverted introvert..."},
                  {id: 2, title: "Spider-Man", snippet: "Spider-Man is coming to town!"},
                  {id: 3, title: "Weather is right", snippet: "Wow! Sunshine!" }]

    setStories(data)

    return (
        <>
        <ul>
            {
                stories.map(st => (
                   <li key={st.id} onClick={() => handleSelect(st.id)}>
                       <strong role="title" aria-label="title">{st.title}</strong> {st.snippet}
                   </li> 
                ))
            }
        </ul>
        </>
    )
}

export default Titles;