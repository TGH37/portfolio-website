/**
 * Author: Tom Hayton
 * Desc: A card displaying the projects I have worked on, to go in the portfolio section
 */

 import React, { MouseEvent, MouseEventHandler, useEffect, useState } from 'react'
 import type { ReactElement } from 'react'
 import styles from '../styles/css/portfolio.module.css';
import useCursorHandlers from '../hooks/useCursorHandlers';

 interface Props {
  title: string
  imgs?: any[]
  thumbnailImgs?: {wireframe?: {src: string, alt: string}}
  content: ReactElement
  updateActiveProject: Function
 }
 
 function ProjectCard(props: Props) {
  const { title, imgs, thumbnailImgs, content, updateActiveProject } = props;
  const [activeThumbnailIdx, setActiveThumbnailIdx] = useState<number>(0);
  const cursorHandlers = useCursorHandlers();
  // useEffect(() => {
  //   setInterval(() => {
  //     setActiveThumbnailIdx(activeThumbnailIdx < imgs.length - 1 ? activeThumbnailIdx+ 1 : 0) 
  //   }, 1000)
  // }, [])
  // const foo = cursorHandlers.onMouseEnter as MouseEventHandler<HTMLDivElement>


  return (
    <div className={styles.card} onClick={() => updateActiveProject()} {...cursorHandlers}>
    {/* // <div className={styles.card} onClick={() => updateActiveProject()} > */}
      <img src={thumbnailImgs ? thumbnailImgs.wireframe.src : imgs[activeThumbnailIdx].src} alt={thumbnailImgs ? thumbnailImgs.wireframe.alt : imgs[activeThumbnailIdx].alt} className={thumbnailImgs ? styles.cardThumbnailWireframe : ""}/>
      <h1>{title}</h1>
      {content}
      <p>learn more...</p>
    </div>
  )
 }
 
 export default ProjectCard