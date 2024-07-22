import React from 'react'
import '../Styles/Home.css'
import myImage from '../Asset/Images/HomeRightImg.jpg'
import cv from '../Asset/Images/Cv.pdf'

const Home = () => {
    return (
        <div id='homeContainer'>
            <div id="homeLeft">
                <div id="homeLeftText">
                    <h1>hi, i'm nabeel !</h1>
                    <h1 id='colorChange'>web developer</h1>
                    <p>I design and develop experiences that make people's lives simpler through web and mobile apps. I work with HTMl5,CSS, JavaScript, and ReactJS.</p>
                    <a href={cv}>
                        <button>View cv</button>
                    </a>
                </div>
            </div>
            <div id="homeRight">
                <img src={myImage} alt="img" />
            </div>

        </div>
    )
}

export default Home