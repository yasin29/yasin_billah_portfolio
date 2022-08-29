// import randomColor from 'randomcolor';
import React from 'react';
import TagCloud from 'TagCloud';
import './index.scss'


const Sphere = () => {
    const myTags = ["Frontend", "Full-Stack", "HTML5", "CSS3", "JavaScript", "Python", "React", "Machine Learning", "TensorFlow", "Latex", "MySql", "MongoDB", "NODE JS", "Django", "R", "Data Science", "Digital Marketing"];


    TagCloud('.content', myTags, {

        // radius in px
        radius: 350,

        // animation speed
        // slow, normal, fast
        maxSpeed: 'fast',
        initSpeed: 'fast',

        // 0 = top
        // 90 = left
        // 135 = right-bottom
        direction: 135,

        // interact with cursor move on mouse out
        keep: true

    });


    return (
        <div>
            <span className="content" style={{ color: "rgb(220, 255, 165)" }}>.</span>
        </div>
    );
};

export default Sphere