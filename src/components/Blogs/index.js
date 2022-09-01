import './index.scss'
import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import url from '../../data/blogs.json';
import { Link } from 'react-router-dom';


const Blog = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [blog, setBlog] = useState([]);
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
        setBlog(url);
    }, []);

    const renderBlog = (blog) => {
        return (
            <div className="images-container">
                {
                    blog.map((port, id) => {
                        return (
                            <Link style={{ cursor: 'pointer', textDecoration: 'none' }} to={`/blog/${port.id}`} className="blog-card" key={id}>
                                <div className="meta">
                                    <div className="photo" style={{ backgroundImage: `url(${port.src})` }}></div>
                                </div>
                                <div className="description">
                                    <span style={{ color: 'silver' }}>#{port.topic}</span>
                                    <h2>{port.label}</h2>
                                    <div className='info-blog'>
                                        <p>{port.writter}</p>
                                        <p>{port.date}</p>
                                    </div>
                                </div>
                            </Link>
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
                        strArray={['B', 'L', 'O', 'G', 'S']}
                        idx={15}
                    />
                </h1>
                <div>{renderBlog(blog)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}


export default Blog;