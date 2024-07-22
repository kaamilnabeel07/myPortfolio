import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../Styles/Skills.css'
import html from '../Asset/Images/html-icon.png'
import css from '../Asset/Images/css-icon.webp'
import js from '../Asset/Images/js-icon.png'
import react from '../Asset/Images/react-icon.png'
import sql from '../Asset/Images/sql-icon.png'



const percentage = 80
const Skills = () => {

    return (
        <div id='skillsContainer'>
            <div id="skillsHeading">
                <h1 data-aos="zoom-in" data-aos-once="true" data-aos-duration="1000">my skills</h1>
            </div>
            <div id="skillsCardsContainer">
                <div id="card" data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
                    <img src={html} alt="img" />
                    <CircularProgressbar className='progressBar' strokeWidth={4} value={percentage} text={`${percentage}%`} styles={buildStyles({
                        textSize: '16px',
                        textColor: '#FFFFFF',
                    })} />
                </div>
                <div id="card" data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
                    <img src={css} alt="img" />
                    <CircularProgressbar className='progressBar' strokeWidth={4} value={percentage} text={`${percentage}%`} styles={buildStyles({
                        textSize: '16px',
                        textColor: '#FFFFFF',
                    })} />
                </div>
                <div id="card" data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
                    <img src={js} alt="img" />
                    <CircularProgressbar className='progressBar' strokeWidth={4} value={percentage} text={`${percentage}%`} styles={buildStyles({
                        textSize: '16px',
                        textColor: '#FFFFFF',
                    })} />
                </div>
                <div id="card" data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
                    <img src={react} alt="img" />
                    <CircularProgressbar className='progressBar' strokeWidth={4} value={percentage} text={`${percentage}%`} styles={buildStyles({
                        textSize: '16px',
                        textColor: '#FFFFFF',
                    })} />
                </div>
                <div id="card" data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
                    <img src={sql} alt="img" />
                    <CircularProgressbar className='progressBar' strokeWidth={4} value={percentage} text={`${percentage}%`} styles={buildStyles({
                        textSize: '16px',
                        textColor: '#FFFFFF',
                    })} />
                </div>
            </div>

        </div>
    )
}

export default Skills