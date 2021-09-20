/**
 * 
 */
import React, { useState} from 'react';
import styles from '../styles/css/portfolio.module.css'
import ProjectCard from './ProjectCard';
import ProjectData from '../utils/projectData';

//  Pictures

function ProjectCardContainer() {
  const [activeProjectPreview, setActiveProjectPreview] = useState(0);
  const [activeProject, setActiveProject] = useState();

  const updateActiveProject = (accessor) => {
    setActiveProject(accessor);
  };

  return (
      <div className={styles.projectCardsContainer}>
        {
          ProjectData.map((projectObj) => {
            const {title, imgs, cardContent, thumbnailImgs} = projectObj;
            return <ProjectCard 
              title = {title}
              imgs = {imgs ? imgs : []}
              thumbnailImgs = {thumbnailImgs ? thumbnailImgs : {}}
              content = {cardContent}
              updateActiveProject = {updateActiveProject}
            />
          })
        }
      </div>
  )
};

export default ProjectCardContainer;
