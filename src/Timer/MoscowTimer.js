import React, { useState, useEffect } from 'react';
import moment from "moment-timezone";
import classes from './Timer.module.css';

const MoscowTimer = () => {
    const moscowTime = moment().tz("Europe/Moscow").format("HH:mm:ss z");

    const [time, setTime] = useState({moscowTime});


    useEffect(() =>{
        const oneSecond = 1000;
        setInterval(() => {
            setTime({moscowTime})
        }, oneSecond)
    })
    return ( <div>
        <h1 className={classes.currentTime} >Moscow Time
            <br></br>
            {moscowTime}</h1>
    </div> );
}
 
export default MoscowTimer;