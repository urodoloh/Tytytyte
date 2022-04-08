import React, {useState} from 'react';
import MoscowTimer from './MoscowTimer';
import MontenegroTimer from './MontenegroTimer';
import UltraButton from '../TimerSwitch/UltraButton'

const Timer = () => {
    const [time, setTime] = useState(false);

    const trueeir = () =>{
        setTime(true)
    };
    const falseier = () =>{
        setTime(false)
    }
    if (time === true){
        return (<div>
            <MoscowTimer />
            <UltraButton onClick={falseier}>Show Montenegro</UltraButton>
        </div>);
        } else {
            return (<div>
                <MontenegroTimer />
                <UltraButton onClick={trueeir}>Show Moscow</UltraButton>
            </div>);
        };

        


}
 
export default Timer;