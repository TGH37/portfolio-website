import React, { CSSProperties, useMemo } from 'react';
import { animated, config, useChain, useSpring, useSpringRef, useTransition } from 'react-spring';
import styles from '../styles/css/skills.module.css';

interface Props {
    skillSectionClickHandler: Function
    icon: {src: string, alt: string}
    title: string
    skillsList: string[]
    isActive: boolean
    wasActive: boolean
};

function SkillCategoryCard(props: Props) {
    const {
        skillSectionClickHandler,
        icon,
        title,
        skillsList,
        isActive,
        wasActive,
    } = props;

    const enterRef = useSpringRef();
    const flashingRef = useSpringRef();

    const enterTransition = useTransition(isActive, {
        from: {  opacity: 0 },
        enter: { opacity: 1 },
        config: config.molasses,
      });

    const leaveTransition = useTransition(wasActive, {
        from: {  opacity: 1, },
        leave: { opacity: 0, },
        config: config.molasses,
      });


    const flashingStyles = useSpring({
        from: {width: 100}, 
        to: {width: 120},
        loop: {reverse: true},
        config: {
            precision: 0.1,
            duration: 1000,
        },
        
    });



    return (
        <div className={`${styles.skillCategoryCard} ${isActive ? styles.activeSkillsCard : ""}`} onClick={() => skillSectionClickHandler(title)} style={{}}>
            {/* <animated.img src={icon.src} alt={icon.alt} className={styles.skillCategoryBgImg} loading="lazy" style={isActive ? flashingStyles : {}}></animated.img> */}
            <img src={icon.src} alt={icon.alt} className={styles.skillCategoryBgImg} loading="lazy"/>
            {
                leaveTransition(({opacity}, item) => {
                    if(!wasActive) return <></>
                    return <animated.div style={{opacity, display: 'none'}}></animated.div>
                })
            }
            {
                enterTransition(({opacity}, item) => {
                    if(!isActive) return <></>
                    return(
                            <animated.ul className={styles.skillsList} style={{opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }), }}>
                                {skillsList.map(skill => <li key={skill}>{skill}</li>)}
                            </animated.ul>
                    )})
            }
        </div>
    );
};

export default SkillCategoryCard;
