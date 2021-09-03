/**
 * Author: Tom Hayton
 * Description: Container for the portfolio section of the site
 */

 import React, { useState } from 'react'


 import ProjectCard from './ProjectCard'
 import ProjectCardContainer from './ProjectCardContainer'
import SelectedProject from './SelectedProject'



 function PortfolioSection({ projectData }) {
  

  return (
    <section id="portfolio-section">
      <h1 className="selected-project__title">Featured Projects</h1>
      <ProjectCardContainer />
      <SelectedProject projectData={projectData}/>
    </section>
  )
}
 
 export default PortfolioSection