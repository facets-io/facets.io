import React from 'react';

const StackSelectCard = ({ logo, label }) => {
    return <>
        <div>
            <img src={logo} />
        </div>
        <div>
            <span>{label}</span>
        </div>
    </>
}

export default StackSelectCard;