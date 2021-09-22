/**
 * 
 */

 import React from 'react';
 import styles from '../styles/css/skills.module.css';
 import frontEndSVG from '../assets/svg/front-end.svg'
 import backEndSVG from '../assets/svg/back-end.svg'
 import databaseSVG from '../assets/svg/database.svg'
 import easelSVG from '../assets/svg/easel.svg'

 function SkillsSection() {
    return(
        <section className={styles.skillsContainer}>

            <div className={styles.titleSection}>
                <h3>Technical Skills</h3>
                <h3>Soft Skills</h3>
                <svg className={styles.divider} width={400} height={10}>
                    <line x1={0} y1={0} x2={400} y2={0} ></line>
                </svg>
            </div>

            <div className={styles.skillCardsContainer}>
                <div style={{}} className={styles.skillCategoryCard}>
                    <img src={frontEndSVG} className={styles.skillCategoryBgImg}/>
                    <ul className='skills-list__list'>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript</li>
                        <li>SCSS</li>
                        <li>React.js</li>
                        <li>Next.js</li>
                    </ul>
                </div>
                <div style={{}} className={styles.skillCategoryCard}>
                    <img src={backEndSVG} className={styles.skillCategoryBgImg}/>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Wordpress CMS</li>
                    </ul>
                </div>
                <div style={{}} className={styles.skillCategoryCard}>
                    <img src={databaseSVG} className={styles.skillCategoryBgImg}/>
                    <ul>
                        <li>MongoDB</li>
                        <li>Webpack</li>
                        <li>Babel</li>
                        <li>Typescript</li>
                        <li>Jest</li>
                    </ul>
                </div>
                <div style={{}} className={styles.skillCategoryCard}>
                    <img src={easelSVG} className={styles.skillCategoryBgImg}/>
                    <ul>
                        <li>AdobeXD</li>
                        <li>GIMP</li>
                        <li>XMind</li>
                        <li>Inkscape</li>
                    </ul>
                </div>
            </div> 



            {/* <div className={styles.skillsCatergory}>
                <h2 className='skills-list__section-title'>Web Development</h2>
                <div className='skills-list'>
                    <h3 className='skills-list__list-title'>Languages / Frameworks</h3>
                </div>
                <div className={styles.designSkillsContainer}>
                    <h3 className='skills-list__list-title'>Design</h3>
                    <ul className='skills-list__list'>
                        <li>AdobeXD</li>
                        <li>Adobe Photoshop</li>
                        <li>GNU Image Processing Package (GIMP)</li>
                        <li>XMind</li>
                    </ul>
                </div>
            </div>

            <div className={styles.skillsCatergory}>
                <h2 className='skills-list__section-title'>Additional Technical Skills</h2>
                <div className='skills-list'>
                    <h3 className='skills-list__list-title'>Languages / Frameworks</h3>
                    <ul className='skills-list__list'>
                        <li>C++</li>
                        <li>Python</li>
                        <li>MATLAB</li>
                        <li>Visual Basic</li>
                    </ul>
                </div>
                <div>
                    <h3 className='skills-list__list-title'>Software</h3>
                    <ul className='skills-list__list'>
                        <li>Unreal Engine 4</li>
                        <li>Microsoft Office Suite</li>
                        <li>Microst Power BI</li>
                    </ul>
                </div>
                <div>
                    <h3 className='skills-list__list-title'>Misc.</h3>
                    <ul className='skills-list__list'>
                        <li>Arduino</li>
                        <li>3D Printing</li>
                    </ul>
                </div>
            </div>

            <div className={styles.skillsCatergory}>
                <div className='skills-list'>
                    <h2 className='skills-list__section-title'>Engineering Softare</h2>
                    <ul className='skills-list__list'>
                        <li>Orcaflex FEA Analysis Suite</li>
                        <li>Flexcom FEA Analysis Suite</li>
                        <li>Solidworks 3D Modelling Software</li>
                        <li>Autodesk Inventor 3D Modelling Software</li>
                        <li>Autodesk Fusion 360 3D Modelling Software</li>
                        <li>AutoCAD 2D Modelling Software</li>
                    </ul>
                </div>
            </div> */}
        </section>
    )
 }

 export default SkillsSection;