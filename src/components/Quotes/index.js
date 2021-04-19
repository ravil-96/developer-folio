import React, { useEffect, useState } from 'react';
import quotesData from './data.js'

const Quotes = () => {
    const [ quotes, setQuotes ] = useState();

    setQuotes(quotesData);

    useEffect(() => {
        
        const renderQuotes = () => {
            
            let index = Math.floor(Math.random() * quotes.length);
                
            return quotes.map(() => <tr><td>{quotes[index]}</td></tr>)

        }
        
        stream = setInterval(renderQuotes, 10000)

        return () => clearInterval(stream) 
        
    }, [])

    return (
        <div id="quotes-container">
        <h1 id="quotes-heading">Motivational Quotes</h1>
        { quotes ? <p>{quotes}</p> : <h4>Quotes are on their way!</h4>}
        </div>
    )
}

export default Quotes;