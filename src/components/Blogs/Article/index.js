import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { useParams } from 'react-router-dom';
import url from "../../../data/blogs.json";
import './index.scss'

const Article = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState([]);

    const blogId = parseInt(id)

    useEffect(() => {
        const match = url.filter(a => a.id === blogId)

        setBlog(match)
    }, [blogId]);
    return (
        <div className="container portfolio-page">
            {
                blog.map(b =>
                    <div key={b.id} id="container">
                        <div id="header">
                            <h2> {b.label} </h2>
                            <div className="clear"> </div>
                        </div>
                        <div id="blog">
                            <p>{b.content}</p>

                            <div className="clear"></div>

                            <div id="content">

                                <h3>{b.writter}</h3>

                                <div id="leftcolone">

                                    <div className="clear"> </div>
                                </div>
                                <div id="footer">
                                    <p> {b.date}
                                    </p>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                )
            }
            <Loader type="pacman" />
        </div>
    );
};

export default Article;