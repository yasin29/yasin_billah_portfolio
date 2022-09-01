import React, { useContext, useState } from 'react';
import { Context } from '..';

const Button = (props) => {
    const { link, name } = props.streams;

    const [activeId, setActiveId] = useState('');
    console.log(activeId);

    const [, setSelect] = useContext(Context) //using context api
    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                <li style={{ cursor: 'pointer' }} onClick={() => { setSelect(link); setActiveId(name) }} className="flat-button">
                    {name}
                </li>
            </ul>
        </div>
    );
};

export default Button;