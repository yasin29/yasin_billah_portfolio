import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
import './index.scss'
import QuoteGenerator from './Qoute'
// import Resume from './Resume'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['A', 'S', 'I', 'N', ' ', 'B', 'I', 'L', 'L', 'A', 'H',]
    const jobArray = [
        'D',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        ' ',
        ' & ',
        ' ',
        'R',
        'e',
        's',
        'e',
        'a',
        'r',
        'c',
        'h',
        'e',
        'r'
    ]

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 5000)
    }, [])
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>o</span>
                        <span className={letterClass}>l</span>
                        <span className={`${letterClass} _12`}>a</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img
                            src={LogoTitle}
                            alt="Yasin, Billah"
                        />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                        />
                    </h1>
                    <h2>Front End Developer / Data Science Enthusiast / Freelancer</h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
                <QuoteGenerator />
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home;