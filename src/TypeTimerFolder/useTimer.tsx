// import React, {useState} from 'react';
// import UltraButton from '../TimerSwitch/UltraButton';
// import TimezoneTimer from './TimezoneTimer';

// const useTimer:any = () =>{
//     const timezones = ["Europe/Moscow", "Europe/Podgorica"];
//     const [timezone, setTimezone] = useState(timezones[0]);
    
//     function toggleTimezone() {
//         setTimezone((prevTimezone) => prevTimezone[prevTimezone.length-1]);
//         timezones.reverse();
//     }  
//     return (<div>
//         <TimezoneTimer timezone={timezone}/>
//         <UltraButton onClick={toggleTimezone}>Show another time</UltraButton>
//     </div>
//     )   
// }
// export default useTimer;