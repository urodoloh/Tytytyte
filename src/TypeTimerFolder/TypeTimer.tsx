import React, {useState} from 'react';
import UltraButton from '../TimerSwitch/UltraButton';
import TimezoneTimer from './TimezoneTimer';

function TypeTimer():any {
    const useTimer:any = () =>{
        const timezones = ["Europe/Moscow", "Europe/Podgorica"];
        const [timezone, setTimezone] = useState(timezones[0]);

        function toggleTimezone() {
            if (timezone === timezones[0]){
                setTimezone(timezones[1])
            } else {
                setTimezone(timezones[0])
            }

            // console.log(`zone = ${timezone}`)
            // console.log(`array = ${timezones}`)
            
        }  
        console.log(`zone from hook = ${timezone}`)
        return (<div>
            <TimezoneTimer timezone={timezone}/>
            <UltraButton onClick={toggleTimezone}>Show another time</UltraButton>
        </div>
        )
    }
    return useTimer();
}
 
export default TypeTimer;