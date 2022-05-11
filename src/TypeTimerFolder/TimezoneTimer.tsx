import React, {useState, useEffect} from 'react';
import moment from "moment-timezone";



function TimezoneTimer(props: {timezone: string}): any {
    function useTimezoneTimer(props: {timezone: string}){
        const getCurrentTimezoneTime = (props: {timezone: string}) =>{
            return moment.tz(props.timezone).format("HH:mm:ss z")
        }
        const [currentTime, setCurrentTime] = useState(getCurrentTimezoneTime(props));

        useEffect(() => {
            const timer = setInterval(() => setCurrentTime(getCurrentTimezoneTime(props)), 1000)

            return () => {
              clearInterval(timer);
            };
          }, []);

        return (<div>
            <h1>{currentTime}</h1>
            </div>)
    }
    return useTimezoneTimer(props)
}

export default TimezoneTimer;