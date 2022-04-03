import React, {useState, useEffect} from 'react';
import moment from 'moment-timezone';
import classes from './Timer.module.css'

const Timer = () => {
    const moscowTime = moment().format('LTS');
    const [time, setTime] = useState(moment().format('LTS'))

    useEffect(() =>{
        const oneSecond = 1000;
        setInterval(() => {
            setTime(moment().format('LTS'))
        }, oneSecond)
    })

    return ( <div>
        <h2 className={classes.moscowStyle} >Moscow Time
            <br></br>
            {moscowTime}</h2>
    </div> );

}
 
export default Timer;