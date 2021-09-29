import { useContext, } from 'react';
import type { ReactElement } from 'react';
import styles from '../styles/css/portfolio.module.css';
import useCursorHandlers from '../hooks/useCursorHandlers';
import { GlobalCtx, ProjectAccessor } from '../contexts/GlobalCtx';

interface ImageAttributes {
  src: string
  alt: string
}

interface Props {
  accessor: ProjectAccessor
  title: string
  thumbnailImgs: {
    wireframe: ImageAttributes
    thumbnail: ImageAttributes
  }
  content: ReactElement
};
 
function ProjectCard(props: Props) {
  const { accessor, title, thumbnailImgs, content } = props;
  const {selectedProjectAccessor, updateSelectedProject} = useContext(GlobalCtx);
  const cursorHandlers = useCursorHandlers();

  const handleCardClick = () => {
    updateSelectedProject(accessor);
  }

  return (
    <div className={styles.card} onClick={() => updateSelectedProject(accessor)} {...cursorHandlers}>
      <div className={styles.cardImgContainer}>
          <img 
                        src={thumbnailImgs.thumbnail.src} 
                        alt={thumbnailImgs.thumbnail.alt}
                        className={`${styles.cardThumbnail}`}
                        style={{opacity: selectedProjectAccessor === accessor ? 1 : 0}}
            />
          <img 
                        src={thumbnailImgs.wireframe.src} 
                        alt={thumbnailImgs.wireframe.alt}
                        className={`${styles.cardThumbnailWireframe}`}
                        style={{opacity: selectedProjectAccessor === accessor ? 0 : 1}}
            />
          </div>
      <h1>{title}</h1>
      <div className={styles.cardContent}>{content}</div>
      <a href="#selected-project">Learn More...</a>
    </div>
          
  );
};
 
export default ProjectCard;