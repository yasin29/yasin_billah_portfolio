import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import url from '../../data/portfolio.json';


const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);
    console.log(url);
    useEffect(() => {
        const timer = setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        setPortfolio(url);
    }, []);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, id) => {
                        return (
                            <div className="blog-card" key={id}>
                                <div className="meta">
                                    <div className="photo" style={{ backgroundImage: `url(${port.src})` }}></div>
                                    <ul className="details">
                                        <li className="tags">
                                            <ul>
                                                <li><button
                                                    className="btn"
                                                    onClick={() => window.open(port.liveSite)}
                                                >View</button></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="description">
                                    <h2>{port.label}</h2>
                                    <p>{port.text}</p>
                                    <p className="read-more">
                                        <a style={{ marginRight: '10px' }} href={port.gitClient} target="_blank" rel='noreferrer'>GitHub-Client</a>
                                        {
                                            port.gitServer && <a target="_blank" rel='noreferrer' style={{ marginRight: '10px' }} href={port.gitServer}>GitHub-Server</a>
                                        }

                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['M', 'Y', ' ', 'W', 'O', 'R', 'K', 'S']}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;