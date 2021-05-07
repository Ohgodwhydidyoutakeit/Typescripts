import React from 'react';

const game = {
    game: false,
    time: 0,
    timer: false
}



const GameContext = React.createContext({
    game,
    setGame: (game: { game: boolean; time: number; timer: boolean; }) => { }
});
export default GameContext;