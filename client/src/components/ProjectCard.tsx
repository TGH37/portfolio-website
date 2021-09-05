/**
 * Author: Tom Hayton
 * Desc: A card displaying the projects I have worked on, to go in the portfolio section
 */

 import React, { useEffect, useState } from 'react'
 import type { ReactElement } from 'react'
 import styles from '../styles/css/portfolio.module.css';

 interface Props {
  title: string
  imgs: any[]
  content: ReactElement
  updateActiveProject: Function
 }
 
 function ProjectCard(props: Props) {
  const { title, imgs, content, updateActiveProject } = props;
  const [activeThumbnailIdx, setActiveThumbnailIdx] = useState<number>(0);
  
  // useEffect(() => {
  //   setInterval(() => {
  //     setActiveThumbnailIdx(activeThumbnailIdx < imgs.length - 1 ? activeThumbnailIdx+ 1 : 0) 
  //   }, 1000)
  // }, [])

  return (
    <div className={styles.card} onClick={() => updateActiveProject()}>
      <img src={imgs[activeThumbnailIdx].src} alt={imgs[activeThumbnailIdx].alt}/>
      <h1>{title}</h1>
      {content}
      <p>learn more...</p>
    </div>
  )
 }
 
 export default ProjectCard