import './index.scss'

import React from 'react';

const Modal = (props) => {
    const { content, _id } = props.content;
    console.log(_id);
    return (
        <>
            <div className="modal">
                <input id={_id} type="checkbox" />
                <label htmlFor={_id}>Learn more { }</label>
                <div className="modal__overlay">
                    <div className="modal__wrap">
                        <label htmlFor={_id}>&#10006;</label>
                        <h2>Abstract</h2>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;