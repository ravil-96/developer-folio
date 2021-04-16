import React, { useEffect, useState } from 'react';
import axios from 'axios';

import quotes from './data'

const Quotes = () => {
    const [ quotes, setQuotes ] = useState();
    
    let { data } = [
        '"PERFECT IS THE ENEMY OF GOOD." –VOLTAIRE',
        '"I’M STILL LEARNING." –MICHELANGELO',
        '"LIFE IS A JOURNEY, NOT A DESTINATION." –RALPH WALDO EMERSON',
        '"LEARNING IS NOT ATTAINED BY CHANCE, IT MUST BE SOUGHT FOR WITH ARDOR AND ATTENDED TO WITH DILIGENCE." ―ABIGAIL ADAMS',
        '"YESTERDAY I WAS CLEVER, SO I CHANGED THE WORLD. TODAY I AM WISE, SO I AM CHANGING MYSELF." –RUMI',
        '"BE CURIOUS, NOT JUDGMENTAL." –WALT WHITMAN',
        '"YOU DON’T HAVE TO BE GREAT TO START, BUT YOU HAVE TO START TO BE GREAT." –ZIG ZIGLAR',
        '"BE STUBBORN ABOUT YOUR GOALS AND FLEXIBLE ABOUT YOUR METHODS." –UNKNOWN',
        '"NOTHING WILL WORK UNLESS YOU DO." –MAYA ANGELOU',
        '"NEVER GIVE UP ON A DREAM JUST BECAUSE OF THE TIME IT WILL TAKE TO ACCOMPLISH IT. THE TIME WILL PASS ANYWAY." –EARL NIGHTINGALE',
        '"ANYONE WHO STOPS LEARNING IS OLD, WHETHER AT TWENTY OR EIGHTY." —HENRY FORD',
        '"TELL ME AND I FORGET. TEACH ME AND I REMEMBER. INVOLVE ME AND I LEARN." –BENJAMIN FRANKLIN',
        '"CHANGE IS THE END RESULT OF ALL TRUE LEARNING." ―LEO BUSCAGLIA',
        '"LIVE AS IF YOU WERE TO DIE TOMORROW. LEARN AS IF YOU WERE TO LIVE FOREVER." ―MAHATMA GANDHI',
        '"A LEARNING CURVE IS ESSENTIAL TO GROWTH." –TAMMY BJELLAND'
    ]

    setQuotes(data)

    useEffect(() => {
    const renderQuote = () => {
        const index = () => {
            let index = Math.floor(Math.random() * data.length);
            return index;
          }
        return quotes[index()]
    }
    renderQuote()
    const stream = setInterval(renderQuote, 10000)

    return () => clearInterval(stream)
    }, [])

    return (
        <>
        <h1>Motivational Quotes</h1>
        <p>{quotes}</p>
        </>
    )
}

export default Quotes
