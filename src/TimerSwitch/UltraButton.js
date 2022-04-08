import React from 'react';
import './UltraButton.module.css';


const UltraButton = ({children, ...props}) => {
    return ( <div>
        <button {...props}>{children}</button>
    </div> );
}
 
export default UltraButton;