import styles from '../styles/css/portfolio.module.css';
import ProjectCard from './ProjectCard';
import ProjectData from '../utils/projectData';
import { useContext } from 'react';
import {GlobalCtx} from '../contexts/GlobalCtx';

function ProjectCardContainer() {
  const {selectedProjectIdx, updateSelectedIdx} = useContext(GlobalCtx);
  return (
      <div className={styles.projectCardsContainer}>
        {
          ProjectData.map((projectObj, idx) => {
            const {accessor, title, cardContent, thumbnailImgs} = projectObj;
            return <ProjectCard 
              key={`${accessor}_project_card`}
              accessor={accessor}
              title = {title}
              thumbnailImgs = {thumbnailImgs}
              content = {cardContent}
              isActive = {selectedProjectIdx === idx}
              cardWidth={300}
            />
          })
        }
      </div>
  );
};

export default ProjectCardContainer;
