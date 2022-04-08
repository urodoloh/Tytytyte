import React, { useState, useEffect } from 'react';
import moment from "moment-timezone";
import classes from './Timer.module.css';

const MontenegroTimer = () => {
    const montenegroTime = moment().tz("Europe/Podgorica").format("HH:mm:ss z");

    const [time, setTime] = useState({montenegroTime});


    useEffect(() =>{
        const oneSecond = 1000;
        setInterval(() => {
            setTime({montenegroTime})
        }, oneSecond)
    })
    return ( <div>
        <h1 className={classes.currentTime} >Montenegro Time
            <br></br>
            {montenegroTime}</h1>
    </div> );
}
 
export default MontenegroTimer;