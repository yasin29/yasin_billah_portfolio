import { useEffect, useState } from 'react'
import {
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
    faPython
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p style={{ fontFamily: 'Source Sans Pro', fontSize: '15px' }}>
                        I'm an IT graduate who is looking forward to building a career with software development and research. I'm an expert in Full-Stack web development (MERN Stack). I'm also a Machine Learning Enthusiast and I have several research based on machine learning and deep learning.
                    </p>
                    <p align="LEFT" style={{ fontFamily: 'Source Sans Pro', fontSize: '15px' }}>
                        I'm quiet confident with my skills and knowledge, naturally curious, and perpetually working on improving my skills and gaining a new set of knowledge consistently. My patience, calmness and hard working tendencies are my biggest assets.
                    </p>
                    <p style={{ fontFamily: 'Source Sans Pro', fontSize: '15px' }}>
                        If I need to define myself in one sentence that would be tech enthusiast, Data Science Enthusiast, a football fanatic,
                        photography enthusiast, and traveler!
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faPython} color="#E8A317" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About