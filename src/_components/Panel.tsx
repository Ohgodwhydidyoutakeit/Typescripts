
import { useContext } from 'react';

import '../_styles/panel.scss';
import { Timer, Time } from './Timer';
import { Word } from './Word';
import GameContext from '../_redux/context/gameContext';
import WordContext from '../_redux/context/wordContext';




export const Panel = () => {
    const { game } = useContext(GameContext);
    const { word } = useContext(WordContext)


    return (
        <div className="container-panel rounded-edges">
            {game.timer && !game.game ? <Timer /> : null}
            {game.game ? <Time /> : null}
            {
            game.game?
            word.word.map((e,f) => {
                return (
                    <Word key={f} message={e} delay={f}  />
                )
            }):null}

{/* 
            {word.word.map((e, f) => {
                return (
                    <Word key={f} message={e} delay={f} />
                )
            })} */}


        </div>
    )
}