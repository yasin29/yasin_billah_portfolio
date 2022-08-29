import React, { useState } from 'react';
import './index.scss'

const Time = () => {
    const [localDate, setlocalDate] = useState();
    const [localTime, setlocalTime] = useState();
    function date() {
        const element = (
            <span>{new Date().toLocaleDateString()}</span>
        );
        setlocalDate(element);
    }

    function time() {
        const element = (
            <span>{new Date().toLocaleTimeString()}</span>
        );
        setlocalTime(element);
    }

    setInterval(date, 1000);
    setInterval(time, 1000);



    return (
        <>
            <div id="clock">
                <p className="date">{localDate}</p>
                <p className="time">{localTime}</p>
            </div>
        </>
    );
};

export default Time;