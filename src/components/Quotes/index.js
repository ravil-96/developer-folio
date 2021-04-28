import React, { useEffect, useState } from 'react';
import quotesData from './data.js'

const Quotes = () => {
    const [ quote, setQuote ] = useState();

    useEffect(() => {
        
        const flipQuotes = () => {
            
            let index = Math.floor(Math.random() * quote.length);  
            setQuote(quotesData[index])

        }
        
        flipQuotes()
        const stream = setInterval(flipQuotes, 10000)

        return () => clearInterval(stream) 
        
    }, [])

    return (
        <div id="quotes-container">
        <h1 id="quotes-heading">Motivational Quotes</h1>
        { quotes ? <p>{quote.quote}</p> &&
                   <p>{quote.author}</p> : <h4>Quotes are on their way!</h4>}
        </div>
    )
}

export default Quotes;