/**
 * 
 */
import React, { useState} from 'react'

import ProjectCard from './ProjectCard'

//  Pictures
import FreecycleOriginal from '../assets/original.png'
import FreecycleRemaster from '../assets/remaster.png'

function ProjectCardContainer() {
  const [activeProjectPreview, setActiveProjectPreview] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  return (
    <div className="body-align">
      <div className="project-cards-container">
        <ProjectCard 
          title="Freecycle Remaster"
          imgSrc = {FreecycleRemaster}
          setActiveProjectPreview = {setActiveProject}
        />
        <ProjectCard 
          title="Freecycle Remake"
          imgSrc = {FreecycleOriginal}
        />
        <ProjectCard 
          title="Freecycle Remake / Remaster"
          imgSrc = {FreecycleRemaster}
        />
        {/* <ProjectCard 
          title="Freecycle Remake / Remaster"
          imgSrc = {FreecycleRemaster}
        />
        <ProjectCard 
          title="Freecycle Remake / Remaster"
          imgSrc = {FreecycleRemaster}
        />
        <ProjectCard 
          title="Freecycle Remake / Remaster"
          imgSrc = {FreecycleRemaster}
        /> */}
      </div>
    </div>
  )
}

export default ProjectCardContainer
