import './SpentTime.css';

import React from 'react';

const SpentTime = (props) => {
    return (
        <div className='spent__time'>
            <p>Spent time on read : {props.spentTime} min</p>
        </div>
    );
};

export default SpentTime;