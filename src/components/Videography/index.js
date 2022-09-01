import './index.scss';
import React, { createContext, useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Stream from './Stream';
import Button from './Button';
import url from '../../data/video.json';

export const Context = createContext();

const Video = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const [streams, setStreams] = useState([]); //streams links
    const [select, setSelect] = useState([]); //selected link
    //selected link
    useEffect(() => {
        setStreams(url);
    }, []);

    return (
        <>
            <Context.Provider value={[select, setSelect]}>
                <div className="container about-page">
                    <div className="text-zone">
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['V', 'i', 'd', 'e', 'o', ' g', 'r', 'a', 'p', 'h', 'y']}
                                idx={15}
                            />
                        </h1>
                        <div>
                            <Stream select={select} ></Stream>
                        </div>
                    </div>
                    <div className="stream-button-container">
                        <div>
                            <h1>Playlist</h1>
                            {
                                streams.map(stream => <Button key={stream.id} streams={stream}></Button>)
                            }
                        </div>
                    </div>
                </div>
            </Context.Provider>
        </>
    );
};

export default Video;