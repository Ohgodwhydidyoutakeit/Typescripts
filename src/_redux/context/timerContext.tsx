import React from "react";

const time = {
    time: 0
}

const TimerContext = React.createContext({
    time,
    setTime: (time: { time: number }) => { }
});
export default TimerContext;