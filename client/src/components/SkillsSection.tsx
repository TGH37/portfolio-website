/**
 * 
 */

 import React, { useEffect, useState } from 'react';
 import styles from '../styles/css/skills.module.css';
 import frontEndSVG from '../assets/svg/front-end.svg'
 import backEndSVG from '../assets/svg/back-end.svg'
 import databaseSVG from '../assets/svg/database.svg'
 import easelSVG from '../assets/svg/easel.svg'

 type HardSkill = "frontend" | "backend" | "auxiliary" | "design";

 function SkillsSection() {

    const [activeSkillset, setActiveSkillset] = useState<HardSkill | null>(null);
    const [activeSkillTitle, setActiveSkillTitle] = useState<string | null>(null);
    const skillSectionClickHandler = (skill: HardSkill) => {
        setActiveSkillset(skill);
    }
    const updateSkillTitle = () => {
        setActiveSkillTitle(() => {
            switch(activeSkillset) {
                case "frontend":
                    return "Frontend"
                case "backend":
                    return "Backend and Database"
                case "auxiliary":
                    return "Build Tools"
                case "design":
                    return "Design Tools"
                default:
                    return ""
            }
        })
    }

    useEffect(() => updateSkillTitle(), [activeSkillset])

    return(
        <section id="skills">
            <h1 className={styles.sectionTitle}>My Skills</h1>
            <div className={styles.skillsContainer}>
                <div className={styles.titleSection}>
                    <h3>Technical Skills</h3>
                    <h3>Soft Skills</h3>
                </div>
                <div className={styles.skillCardsContainer}>
                    <div className={styles.floatingSkillTitle}>
                        <h3>{activeSkillTitle}</h3>
                    </div>
                    <div style={{}} className={styles.skillCategoryCard} onClick={() => skillSectionClickHandler("frontend")}>
                        <img src={frontEndSVG} className={styles.skillCategoryBgImg} loading="lazy"/>
                        <ul className='skills-list__list'>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Javascript</li>
                            <li>SCSS</li>
                            <li>React.js</li>
                            <li>Next.js</li>
                        </ul>
                    </div>
                    <div style={{}} className={styles.skillCategoryCard} onClick={() => skillSectionClickHandler("backend")}>
                        <img src={backEndSVG} className={styles.skillCategoryBgImg} loading="lazy"/>
                        <ul>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Wordpress CMS</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div style={{}} className={styles.skillCategoryCard} onClick={() => skillSectionClickHandler("auxiliary")}>
                        <img src={databaseSVG} className={styles.skillCategoryBgImg} loading="lazy"/>
                        <ul>
                            <li>Webpack</li>
                            <li>Babel</li>
                            <li>Typescript</li>
                            <li>Jest</li>
                        </ul>
                    </div>
                    <div style={{}} className={styles.skillCategoryCard} onClick={() => skillSectionClickHandler("design")}>
                        <img src={easelSVG} className={styles.skillCategoryBgImg} loading="lazy"/>
                        <ul>
                            <li>AdobeXD</li>
                            <li>GIMP</li>
                            <li>XMind</li>
                            <li>Inkscape</li>
                        </ul>
                    </div>
                </div> 
            </div>
        </section>
    )
 }

 export default SkillsSection;