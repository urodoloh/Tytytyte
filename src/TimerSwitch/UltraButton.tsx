import React, { FC } from 'react';


interface PropsForButton {
    children?: React.ReactNode;
    onClick:  () => void;
}

const UltraButton: FC<PropsForButton> = ({children, ...props}) => {
    return (<button {...props}>{children}</button>);
}
 
export default UltraButton;