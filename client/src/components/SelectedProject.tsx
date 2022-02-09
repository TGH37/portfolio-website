import React, { useContext, useState } from 'react';
import styles from '../styles/css/portfolio.module.css';
import TechnologyList from './TechnologyList';
import ProjectDevicePreview from './ProjectDevicePreview';
import { GlobalCtx } from '../contexts/GlobalCtx';

interface Props {

};
 
function SelectedProject(props: Props) {
  const { } = props;
  const { projectData, selectedProjectIdx } = useContext(GlobalCtx);
  const { title, technologies, sections } = projectData[selectedProjectIdx];

  return (
  <div className={styles.selectedProjectContainer} id="selected-project">
    <h3 className={styles.selectedProjectTitle}>{title.toLocaleUpperCase()}</h3>
    <div className="divider"></div> 
    <ProjectDevicePreview/>
      <div className={styles.projectDetailsContainer}>
        {sections.map((sectionObj) => (
            <React.Fragment key={sectionObj.title}>
              <h5 className={styles.selectedProjectHeader}>{sectionObj.title}</h5>
              <div className={styles.projectContentContainer}>
                {sectionObj.content}
              </div>
            </React.Fragment>
          )
        )}
      </div>
      <div className={styles.techContainer}>
        <h5 className={styles.selectedProjectHeader}>Technologies Used</h5>
        <TechnologyList technologiesUsed={technologies}/>
      </div>
      <div className={styles.projectCtaBtnContainer}>
        {projectData[selectedProjectIdx].links.map((linkObj) => (
        <a href={linkObj.href} target="_blank" key={linkObj.accessor}><button className={styles.projectCtaBtn} tabIndex={-1}>VIEW {linkObj.accessor.toLocaleUpperCase()}</button></a>
        ))}
      </div>
  </div>
  );
};
 
export default SelectedProject;
 