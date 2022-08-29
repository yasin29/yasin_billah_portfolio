import React, { useEffect, useState } from 'react';
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Sphere from './Sphere';
import { Link } from 'react-router-dom';


const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const myTags = ["Frontend", "Full-Stack", "HTML5", "CSS3", "JavaScript", "Python", "React", "Machine Learning", "TensorFlow", "Latex", "MySql", "MongoDB", "NODE JS", "Django", "R", "Data Science", "Digital Marketing"];

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'k', 'i', 'l', 'l', 's']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Expert in front-end development and Machine Learning technologies such as tech {
                            myTags.map((tag, id) => {
                                return (
                                    <b key={id} style={{ color: "#FFD700" }}>{tag}, </b>
                                )
                            })
                        } etc.
                    </p>
                    <p>
                        I’m not a designer but I have a good sense of aesthetics, and
                        experience in responsive, mobile-first web design. I put special
                        effort into optimizing my code and providing the best user
                        experience. I would love to give you any kind of support also after
                        the project's completion. I guarantee a commitment during work on
                        your project.
                    </p>
                    <div className="contact-form">
                        <Link to="/contact" className="flat-button">
                            CONTACT ME
                        </Link>
                    </div>
                </div>
                <div className="map-skills-wrap">
                    <Sphere />
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Skills;