import React from 'react'
import { TEXT_TITLE, TEXT_BIG_TITLE, TEXT_TEXT, TEXT_SUBTITLE } from '../constants/titleConstants'

const getTextElement = (text, type) => {
    switch(type) {
        case TEXT_BIG_TITLE:
            return <h1>{text}</h1>
        case TEXT_TITLE:
            return <h2>{text}</h2>
        case TEXT_SUBTITLE:
            return <h3>{text}</h3>
        case TEXT_TEXT:
            return <p>{text}</p>
        default: 
            return <p>{text}</p>
    }
}

function Text({text, type}) {
    const element = getTextElement(text, type);

    return (
        <div>{element}</div>
    )
}

export default Text