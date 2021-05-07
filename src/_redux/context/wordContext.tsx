import React from 'react';

const word = {
    word: [""]
}

const WordContext = React.createContext({
    word,
    setWord: (word: { word: string[] }) => { }
});
export default WordContext;