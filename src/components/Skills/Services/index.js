import './index.scss'

import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../../AnimatedLetters';
import Loader from 'react-loaders';
import url from '../../../data/services.json';
import { Link } from 'react-router-dom';
const Services = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [services, setServices] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        setServices(url);
    }, []);

    const renderServices = (services) => {
        return (
            <div className="images-container">
                <div className="wrapper">
                    {
                        services.map(service =>
                            <div key={service.id} className="plan">
                                <header>
                                    <h4 className="plan-title">{service.name}</h4>
                                    <div className="plan-cost"><span className="plan-price">${service.price}</span></div>
                                </header>
                                <ul className="plan-features">
                                    <li>{service.o1}</li>
                                    <li>{service.o2}</li>
                                    <li>{service.o3}</li>
                                    <li>{service.o4}</li>
                                    <li>{service.o5}</li>
                                </ul>
                                <div className="plan-select"><Link to="/contact" className="flat-button">
                                    Get a Quote
                                </Link></div>
                            </div>
                        )
                    }
                </div>
            </div >
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterclassName={letterClass}
                        strArray={['M', 'y', ' ', 'S', 'e', 'r', 'v', 'i', 'c', 'e', 's']}
                        idx={15}
                    />
                </h1>
                <div>{renderServices(services)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Services;