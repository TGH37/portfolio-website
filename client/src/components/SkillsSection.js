/**
 * 
 */

 import React from 'react'

 function SkillsSection() {
    return(
        <section className='skills-section'>
            <div className='skill-category'>
                <h2 className='skills-list__section-title'>Web Development</h2>
                <div className='skills-list'>
                    <h3 className='skills-list__list-title'>Languages / Frameworks</h3>
                    <ul className='skills-list__list'>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div>
                    <h3 className='skills-list__list-title'>Software</h3>
                    <ul className='skills-list__list'>
                        <li>AdobeXD</li>
                        <li>Adobe Photoshop</li>
                        <li>GNU Image Processing Package (GIMP)</li>
                        <li>XMind</li>
                    </ul>
                </div>
            </div>

            <div className='skill-category'>
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

            <div className='skill-category'>
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
            </div>
        </section>
    )
 }

 export default SkillsSection;