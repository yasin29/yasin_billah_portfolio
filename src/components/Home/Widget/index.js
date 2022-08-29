import React from 'react';
import Time from './Time';
import Weather from './Weather';
import './index.scss'

const Widget = () => {
    return (
        <div className='widgetContainer' style={{ backgroundColor: "#151B54" }}>
            <Time />
            <Weather />
        </div>
    );
};

export default Widget;