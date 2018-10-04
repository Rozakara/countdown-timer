import React from 'react';

const Counters = (props) => (
    <div className="counter-wrapper">
        <span className="display-counter">{props.data.hours} hr</span>
        <span className="display-counter">{props.data.minutes} mn</span>
        <span className="display-counter">{props.data.seconds} sc</span>
    </div>
)

export default Counters;