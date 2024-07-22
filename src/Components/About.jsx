import React from 'react'
import ambition from '../Asset/Images/aboutAmbition.png'
import purpose from '../Asset/Images/aboutPurpose.png'
import myImg from '../Asset/Images/HomeRightImg.jpg'
import '../Styles/About.css'

const About = () => {
  return (
    <div id='aboutContainer' >
        <div id="aboutHeading">
            <h1 id='colChange'>ABOUT ME</h1>
            <h1 data-aos="fade-left" data-aos-once="true" data-aos-duration="1000">Crafting stories through design</h1>
            <h1 data-aos="fade-left" data-aos-once="true" data-aos-duration="1000">and innovation</h1>
        </div>
        <div id="aboutContent">
            <div id="aboutContentLeft">
                <img src={ambition} alt="img" />
                <h1>My Ambition</h1>
                <p>As a passionate web developer, my ambition is to continually push the boundaries of what I can achieve in the digital realm. I thrive on challenges that allow me to innovate, problem-solve, and create impactful solutions through code. My journey in web development is driven by a relentless pursuit of excellence and a commitment to staying at the forefront of technology trends.</p>
                <img src={purpose} alt="img" />
                <h1>My Purpose</h1>
                <p>Driven by a passion for creativity and problem-solving, my purpose as a web developer is to craft elegant and functional digital solutions. With a commitment to staying at the forefront of technology trends, I aim to create user-centric experiences that not only meet but exceed client expectations. My goal is to continuously learn and innovate, contributing to projects that make a meaningful impact in the digital landscape.</p>
            </div>
            <div id="aboutContentRight">
                <img src={myImg} alt="" />
            </div>

        </div>
    </div>
  )
}

export default About