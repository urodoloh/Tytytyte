// import React, {useState, useEffect} from 'react';
// import moment from "moment-timezone";

// function useTimezoneTimer(props: any){
//     const getCurrentTimezoneTime = (props: { timezone: string; }) =>{
//         return moment().tz(props.timezone).format("HH:mm:ss z")
//     }
//     const [currentTime, setCurrentTime] = useState(getCurrentTimezoneTime(props));
//     const [timeInterval, setTimeInterval] = useState(undefined);

//     useEffect(() => {
//         setTimeInterval(
//             setInterval(() => setCurrentTime(getCurrentTimezoneTime(props)), 1000)
//         );
        
//         return clearInterval(timeInterval);
//     })
//     return (<div>{currentTime}</div>)
//     }

//     export default useTimezoneTimer;