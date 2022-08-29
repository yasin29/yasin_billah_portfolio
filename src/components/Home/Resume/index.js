import React from 'react';
import './index.scss'

const Resume = () => {
    return (
        <div className='resume'>
            <h4>Check Out my Resume/CV</h4>
            <a href="https://drive.google.com/file/d/1-U4NO7eiUKqBLXkn76WE7UXVo9aWs1uL/view?usp=sharing" target="blank" className="flat-resume-button">
                Academic Resume
            </a>
            <a href="https://drive.google.com/file/d/1dar--PR772Bwtebq4y5UD3Gq4UNHe83m/view?usp=sharing" target="blank" className="flat-resume-button">
                Technical Resume
            </a>
        </div>
    );
};

export default Resume;