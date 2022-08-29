import './index.scss'
import React from 'react';
import { Spinner } from 'react-bootstrap';
import useQuote from '../../../Hooks/useQuote';
import Resume from '../Resume';
import { Link } from 'react-router-dom'
import Widget from '../Widget';


const QuoteGenerator = () => {

    const [quotes] = useQuote();
    const arrLen = quotes.length;
    let min = 0;
    let max = arrLen;
    let qt = quotes[Math.floor(Math.random() * (max - min) + min)];
    return (
        <div className="quote-container">
            <Widget />
            {quotes.length ? <blockquote style={{ color: 'white' }} className="blockquote text-center">
                <span>
                    <q style={{ fontFamily: 'Source Code Pro', fontSize: '1.3rem' }}>{qt.quote} </q>
                    <footer className="quote-author blockquote-footer m-2">
                        <cite style={{ color: 'silver' }} title="Source Title">{qt.author}</cite></footer>
                    <Resume />
                    <div className='play-games'>
                        <h4 style={{ color: "#c56d76" }}>Or if you're feeling bored</h4>
                        <Link to="/play" className="flat-quote-button">
                            PLAY 2048
                        </Link>
                    </div>
                </span>
            </blockquote> : <Spinner animation="grow" variant="info" />}
        </div>
    );
};

export default QuoteGenerator;