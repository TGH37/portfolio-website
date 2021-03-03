/**
 * Author: Tom Hayton
 * Desc: A card displaying the projects I have worked on, to go in the portfolio section
 */

 import React from 'react'
 
 function ProjectCard({ title, imgSrc, setActiveProject }) {

  const imgAlt = `Preview picture of the landing page for my ${title} project`;
  const activeProject = null;
  const setActive = () => {


    setActiveProject()
  };
  return (
    <div className="project-card" onClick={setActiveProject}>
      <img src={imgSrc} alt={imgAlt}/>
      {title}
      <p>learn more...</p>
    </div>
  )
 }
 
 export default ProjectCard