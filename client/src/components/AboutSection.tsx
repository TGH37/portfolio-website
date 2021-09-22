import React from 'react';
import styles from '../styles/css/about.module.css';

import Me_500 from '../assets/photos/me_grayscale_500.png';
import Me_768 from '../assets/photos/me_grayscale_768.png';
import Me_1024 from '../assets/photos/me_grayscale_1024.png';
import SVGMask from './SVGMask';


interface Props {};

function AboutSection(props: Props) {
    const {} = props;
    const aspectRatio = 500 / 548;

    return (
        <>
            <h3 style={{textAlign: "center"}}>I’m a full-stack web developer, specialising in (but not limited to) working with MERN stack technologies.<br/>Please have a snoop around any of my projects and if you like what you see, get in touch! </h3>
            <div className={`${styles.aboutContainer}`}>
                <p> 
                    I’ve been designing and building personal projects on the web for just over a year now, after leaving my career in engineering to follow the work that I am most passionate about. My academic and professional experience as an engineer has given me plenty of skills that I find myself using in my work as a web developer. Having plenty of experience working with teams of various sizes, clients of many different backgrounds and managing a wide spectrum of projects, I have a rounded skillset that gives me the tools and confidence to take on any challenge. 
                </p>
                <div className={`${styles.imgContainer}`} style={{width: 500}}>
                    <img 
                        src={Me_500} 
                        alt="foo"
                        className={`${""}`}
                        srcSet={`
                            ${Me_500} 500w,
                            ${Me_768} 768w,
                            ${Me_1024} 1024w,
                        `} 
                        sizes={`
                        `}
                    />
                    <SVGMask />
                </div>
            </div>
            <h3 style={{textAlign: "center"}}> We are what we repeatedly do...<br/>Excellence, therefore, isn't just an act, but a habit 
            <br/>And life isn't just a series of events, but an ongoing process of self-definition.</h3>
        </>
    );
};

export default AboutSection;
