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

  return (
    <div className={styles.card} onClick={() => updateSelectedProject(accessor)} {...cursorHandlers}>
      <div className={styles.cardImgContainer}>
        <img 
          src={selectedProjectAccessor === accessor ? thumbnailImgs.thumbnail.src : thumbnailImgs.wireframe.src} 
          alt={selectedProjectAccessor === accessor ? thumbnailImgs.thumbnail.alt : thumbnailImgs.wireframe.alt} 
          className={`${selectedProjectAccessor === accessor ? styles.cardThumbnail : styles.cardThumbnailWireframe}`}
        />
      </div>
      <h1>{title}</h1>
      <div className={styles.cardContent}>{content}</div>
    </div>
  );
};
 
export default ProjectCard;