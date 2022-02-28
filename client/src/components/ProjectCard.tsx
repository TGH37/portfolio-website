import { useContext, useState, lazy, Suspense } from 'react';
import type { ReactElement } from 'react';
import styles from '../styles/css/portfolio.module.css';
import useCursorHandlers from '../hooks/useCursorHandlers';
import { GlobalCtx } from '../contexts/GlobalCtx';
import { useSpring, useTransition, config, animated } from 'react-spring';

interface Props {
  accessor: ProjectAccessor
  title: string
  thumbnailImgs: {
    wireframe: ImageAttributes
    thumbnail: ImageAttributes
  }
  content: ReactElement
  isActive: boolean
  cardWidth: number
};
 
function ProjectCard(props: Props) {
  const { accessor, title, thumbnailImgs, content,  isActive, cardWidth } = props;
  const {selectedProjectAccessor, updateSelectedProject} = useContext(GlobalCtx);
  const cursorHandlers = useCursorHandlers();

  const handleCardClick = () => {
    updateSelectedProject(accessor);
  };


  const activeTransition = useTransition(isActive, {
    from: {opacity: 0},
    enter: {opacity: 1},
    config: {precision: 0.1, duration: 250},
    exitBeforeEnter: true,
  });

  // const Wireframe = lazy(() => import(`${thumbnailImgs.wireframe.src}`));
  

  return (
        <div className={styles.card} onClick={handleCardClick} {...cursorHandlers}>
          <div className={styles.cardImgContainer}>
            <img 
                          src={thumbnailImgs.wireframe.src} 
                          alt={thumbnailImgs.wireframe.alt}
                          className={`${styles.cardThumbnailWireframe}`}
              />
              {/* <Suspense fallback={<div>Loading...</div>}>
                <Wireframe />
              </Suspense> */}
              {
                activeTransition(({ opacity }, item) => {
                  return isActive ?
                  <animated.img 
                            src={thumbnailImgs.thumbnail.src} 
                            alt={thumbnailImgs.thumbnail.alt}
                            className={`${styles.cardThumbnail}`}
                            style={{opacity}}
                />
                : <></>
            })}
          </div>
          <h1>{title}</h1>
          <div className={styles.cardContent}>{content}</div>
          <a href="#selected-project">Learn More...</a>
        </div>

    )
};
 
export default ProjectCard;