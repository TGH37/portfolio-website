/**
 * Author: Tom Hayton
 * Description: Container for the portfolio section of the site
 */

 import React, { useState } from 'react'


 import ProjectCard from './ProjectCard'
 import ProjectCardContainer from './ProjectCardContainer'
import SelectedProject from './SelectedProject'



 function PortfolioSection() {
  

  return (
    <section id="portfolio-section">
      <h1 className="selected-project__title">Projects I've Worked on</h1>
      <ProjectCardContainer />
      <SelectedProject />
    </section>
  )
}
 
 export default PortfolioSection