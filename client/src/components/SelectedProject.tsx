/**
 * 
 */

 import React, { useState } from 'react';
 import { Link } from 'react-router-dom';
 import styles from '../styles/css/portfolio.module.css';



//  Icons
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import TechnologyList from './TechnologyList';
import ProjectDevicePreview from './ProjectDevicePreview';
import { projectData } from '../interfaces';

  interface Props {
    projectData: projectData
  }
 
 function SelectedProject(props: Props) {
    const { projectData } = props;
    const { title, imgs, technologies, sections } = projectData;
  
   return (
    <div className={styles.selectedProjectContainer}>
      <h3 className={styles.selectedProjectTitle}>{title.toLocaleUpperCase()}</h3>
      <div className="divider"></div> 
      <ProjectDevicePreview projectData={projectData}/>
        <div className={styles.projectDetailsContainer}>
          {sections.map((sectionObj) => (
              <>
                <h5 className={styles.selectedProjectHeader}>{sectionObj.title}</h5>
                {sectionObj.content}
              </>
            )
          )}
        </div>
        <div className={styles.techContainer}>
          <h5 className={styles.selectedProjectHeader}>Technologies Used</h5>
          <TechnologyList technologiesUsed={technologies}/>
        </div>
        <div className={styles.projectCtaBtnContainer}>
          {projectData.links.map((linkObj) => (
          <a href={linkObj.href} target="_blank"><button className={styles.projectCtaBtn}>VIEW {linkObj.accessor.toLocaleUpperCase()}</button></a>
          ))}
        </div>
    </div>
   );
 };
 
 export default SelectedProject;
 