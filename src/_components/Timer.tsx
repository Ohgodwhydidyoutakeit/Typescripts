import { useContext, useEffect, useState } from 'react';

import GameContext from '../_redux/context/gameContext';
import TimerContext from '../_redux/context/timerContext';

import '../_styles/timers.scss'
import '../_styles/panel.scss';

export const Timer = () => {
    const { game, setGame } = useContext(GameContext);

    const [counter, setCounter] = useState(3)
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);

    });
    useEffect(() => {

        if (counter === 0) {
            setGame({
                ...game,
                timer: game.timer = false,
                game: game.game = true
            })

        }
    }, [counter])
    return (
        <div className="time-format time-format-size-large timer">
            {counter}
        </div>
    )
}

export const Time = () => {
    const { time, setTime } = useContext(TimerContext);
    const { game } = useContext(GameContext)
    useEffect(() => {
        if (game.game) {
            setTimeout(() => setTime({
                time: time.time + 1
            }), 1000);
        }
    }, [time, setTime])
    const changeIntoRealTime = (num: number): string => {
        return new Date(num * 1000).toISOString().substr(14, 5)
    }
    return (
        <div className="time-format time-format-size-small time">
            {changeIntoRealTime(time.time)}
        </div>
    )
}