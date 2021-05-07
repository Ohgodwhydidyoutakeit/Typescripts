import React, { useState } from 'react';
//scss
import './_styles/_main.scss';
//components
import { Panel } from './_components/Panel';
import { Input } from './_components/Input';
import { Logo } from './_components/Logo';
import { LanguageSelection } from './_components/LanguageSelection';


// contexts
import LanguageContext from './_redux/context/languageContext';
import GameContext from './_redux/context/gameContext';
import WordsContext from './_redux/context/wordContext';
import TimerContext from './_redux/context/timerContext';

// words json
import dict from './_misc/words/words.json';
export const App = () => {


  const [language, setLanguage] = useState<string>("EN");
  const [game, setGame] = useState({
    game: false,
    time: 0,
    timer: false,

  });
  const [word, setWord] = useState({
    word: dict.words,
  })
  const [time, setTime] = useState({
    time: 0
  });



  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <LanguageSelection />
        <Logo />

        <TimerContext.Provider value={{ time, setTime }}>


          <GameContext.Provider value={{ game, setGame }}>
            <WordsContext.Provider value={{ word, setWord }}>

              <Panel />
              <Input />
            </WordsContext.Provider>

          </GameContext.Provider>
        </TimerContext.Provider>
      </LanguageContext.Provider>

    </div >
  );
}


