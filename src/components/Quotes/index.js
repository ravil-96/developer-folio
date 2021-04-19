import React, { useEffect, useState } from 'react';
import quotesData from './data.js'

const Quotes = () => {
    const [ quote, setQuote ] = useState();

    setQuotes(quotesData);

    useEffect(() => {
        
        const renderQuotes = () => {
            
            let index = Math.floor(Math.random() * quote.length);
                
            return quote.map(() => <tr><td>{quotes[index]}</td></tr>)

        }
        
        // stream = setInterval(renderQuotes, 10000)

        // return () => clearInterval(stream) 

        renderQuotes()
        
    }, [])

    return (
        <div id="quotes-container">
        <h1 id="quotes-heading">Motivational Quotes</h1>
        { quotes ? <p>{quote}</p> : <h4>Quotes are on their way!</h4>}
        </div>
    )
}

export default Quotes;