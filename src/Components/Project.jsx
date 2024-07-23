import React from 'react'
import '../Styles/Project.css'
import project1 from '../Asset/Images/project1.png'
import project2 from '../Asset/Images/project2.png'
import project3 from '../Asset/Images/project3.png'

const Project = () => {
    return (
        <div id='projectContainer'>
            <div id="projectHeading">
                <h1 data-aos="zoom-in" data-aos-once="true" data-aos-duration="1000">my recent projects</h1>
            </div>
            <div id="projectCardContainer">
                <a href='https://lamborghini-clone-project1.netlify.app/' target="_blank" rel="noreferrer" id="projectCard" data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
                    <img src={project1} alt="img" />
                    <h1>Lamborghini Models Page Clone</h1>
                </a>
                <a href='https://apple-clone-project2.netlify.app/' target="_blank" rel="noreferrer" id="projectCard" data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
                    <img src={project2} alt="img" />
                    <h1>Apple Page Clone</h1>
                </a>
                <a href='' target="_blank" rel="noreferrer" id="projectCard" data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
                    <img src={project3} alt="img" />
                    <h1>News App</h1>
                </a>
            </div>
        </div>
    )
}

export default Project