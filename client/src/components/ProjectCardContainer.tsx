import styles from '../styles/css/portfolio.module.css';
import ProjectCard from './ProjectCard';
import ProjectData from '../utils/projectData';

function ProjectCardContainer() {
  return (
      <div className={styles.projectCardsContainer}>
        {
          ProjectData.map((projectObj, idx) => {
            const {accessor, title, cardContent, thumbnailImgs} = projectObj;
            return <ProjectCard 
              key={`${accessor}_project_card_${idx}`}
              accessor={accessor}
              title = {title}
              thumbnailImgs = {thumbnailImgs}
              content = {cardContent}
            />
          })
        }
      </div>
  );
};

export default ProjectCardContainer;
