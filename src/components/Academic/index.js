import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import url from '../../data/research.json';

const Academic = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [research, setResearch] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    useEffect(() => {
        setResearch(url);
    }, []);

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterclassName={letterClass}
                            strArray={['A', 'c', 'a', 'd', 'e', 'm', 'i', 'c']}
                            idx={15}
                        />
                    </h1>
                    <div className="course">
                        <div className="course-preview">
                            <h6>University</h6>
                            <h3>Bangladesh University of Professionals</h3>
                            <h6>2017-2021</h6>
                        </div>
                        <div className="course-info">
                            <div className="progress-container">
                                <div className="progress"></div>
                                <span className="progress-text">
                                    Degree Awarded
                                </span>
                            </div>
                            <h6>Degree</h6>
                            <h2>Bachelor of Science</h2>
                            <h6>Major</h6>
                            <h2>Information and Communication Engineering</h2>
                        </div>
                    </div>
                    <div className="course">
                        <div className="course-preview">
                            <h6>College</h6>
                            <h3>Notre Dame College, Dhaka</h3>
                            <h6>2013-2015</h6>
                        </div>
                        <div className="course-info">
                            <div className="progress-container">
                                <div className="progress"></div>
                                <span className="progress-text">
                                    Degree Awarded
                                </span>
                            </div>
                            <h6>Degree</h6>
                            <h2>Higher Secondary Certificate</h2>
                            <h6>Major</h6>
                            <h2>Science</h2>
                        </div>
                    </div>
                </div>
                <div className="map-wrap">
                    <h1>
                        Research
                    </h1>
                    {
                        research.map((res, _id) => {
                            return (
                                <div className="course" key={_id}>
                                    <div className="course-preview">
                                        <h6>{res.type}</h6>
                                        <h3>{res.ins}</h3>
                                        <h6>{res.year}</h6>
                                    </div>
                                    <div className="course-info">
                                        <h6>{res.topic}</h6>
                                        <h6>Research Title</h6>
                                        <h2>{res.title}</h2>


                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Academic