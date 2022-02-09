import React, { useEffect, useState } from 'react';
import styles from '../styles/css/skills.module.css';
import frontEndSVG from '../assets/svg/front-end.svg';
import backEndSVG from '../assets/svg/back-end.svg';
import databaseSVG from '../assets/svg/database.svg';
import easelSVG from '../assets/svg/easel.svg';
import SkillCategoryCard from './SkillCategoryCard';



 function SkillsSection() {

    const [activeSkillset, setActiveSkillset] = useState<HardSkill | null>(null);
    const [activeSkillTitle, setActiveSkillTitle] = useState<string | null>(null);
    const skillSectionClickHandler = (skill: HardSkill) => setActiveSkillset(skill);

    const updateSkillTitle = () => {
        setActiveSkillTitle(() => {
            switch(activeSkillset) {
                case "frontend":
                    return "Frontend";
                case "backend":
                    return "Backend";
                case "auxiliary":
                    return "Tools";
                case "design":
                    return "Design";
                default:
                    return "Frontend";
            };
        });
    };

    useEffect(() => updateSkillTitle(), [activeSkillset]);

    return(
        <section id="skills">
            <h1 className={styles.sectionTitle}>My Skills</h1>
            <div className={styles.skillsContainer}>
                <div className={styles.titleSection}>
                    <h3>Technical Skills</h3>
                    <p>My primary focus has been learning the core languages of the MERN stack, as well as peripheral technologies that help to increase the functionality of the apps that I build.</p>
                    <p>For example, I have learned and implemented the basics of authentication with a server, using JSON Web Tokens stored in cookies. </p>
                    {/* <h3>Soft Skills</h3> */}
                </div>
                <div className={styles.skillCardsContainer}>
                    <div className={styles.floatingSkillTitle}>
                        <h3>{activeSkillTitle}</h3>
                        {/* <svg viewBox='0 0 200 100' width={200}>
                            <ellipse cx={100} cy={50} rx={100} ry={30} fill="#cecece"/>
                            <ellipse cx={100} cy={50} rx={80} ry={20} fill={"#141414"}/>
                        </svg> */}
                    </div>
                    <SkillCategoryCard 
                        skillSectionClickHandler={skillSectionClickHandler}
                        icon={{src: frontEndSVG, alt: 'alt text'}} 
                        title={"frontend"} 
                        skillsList={["HTML5", "CSS3", "Javascript", "SCSS", "React.js", "Next.js",]} 
                        isActive={activeSkillTitle === "Frontend"}  
                        cardIdx={0}
                    />
                    <SkillCategoryCard 
                        skillSectionClickHandler={skillSectionClickHandler}
                        icon={{src: backEndSVG, alt: 'alt text'}} 
                        title={"backend"} 
                        skillsList={["Node.js", "Express.js", "Wordpress CMS", "MongoDB"]} 
                        isActive={activeSkillTitle === "Backend"}  
                        cardIdx={1}
                    />
                    <SkillCategoryCard 
                        skillSectionClickHandler={skillSectionClickHandler}
                        icon={{src: databaseSVG, alt: 'alt text'}} 
                        title={"auxiliary"} 
                        skillsList={["Webpack", "Babel", "Typescript", "Jest",]} 
                        isActive={activeSkillTitle === "Tools"} 
                        cardIdx={2}
                     />
                    <SkillCategoryCard 
                        skillSectionClickHandler={skillSectionClickHandler}
                        icon={{src: easelSVG, alt: 'alt text'}} 
                        title={"design"} 
                        skillsList={["AdobeXD", "GIMP", "XMind", "Inkscape"]} 
                        isActive={activeSkillTitle === "Design"} 
                        cardIdx={3}
                     />
                </div> 
            </div>
        </section>
    );
 };

 export default SkillsSection;