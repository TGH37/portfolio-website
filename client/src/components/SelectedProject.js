/**
 * 
 */

 import React, { useState } from 'react'
 import { Link } from 'react-router-dom'



//  Icons
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'
import TechnologyList from './TechnologyList'
import ProjectDevicePreview from './ProjectDevicePreview'
 
 function SelectedProject() {
  const [selectedProject, setSelectedProject] = useState("freecycle")
  
   return (
    <div id="selected-project-container">
      <h3 id="selected-project-title">Freecycle</h3>
      <div>Divider</div> 
      <ProjectDevicePreview project={{get: selectedProject, set: setSelectedProject}}/>
        <div id="project-details-text-container">
          <h5>Description</h5>
          <p>For this project, I chose to completely remake and remaster <a href="https://www.freecycle.org/">freecycle.org</a>, using <strong>MERN</strong> stack technologies. The remastered website uses branding assets taken from the original website and social media. Freecycle is a website that enables users to offer their discarded items to other, local users for free. It is a non-for-profit organisation run mainly by volunteers.</p>
          <h5>Improvements Made</h5>
          <span>Please see <Link to="#">handover documentation</Link> for more information</span>
          <ul>
            <li>Responsive Website</li>
            <li>Simplified Colour Palette</li>
            <li>Enhanced User Features</li>
          </ul>
        </div>
        <div id="tech-used-container">
          <h5>Technologies Used</h5>
          <TechnologyList/>
        </div>
        <div id="project-cta-btn-container">
          <Link to="#"><button className="project-cta-btn">View Site</button></Link>
          <Link to="#"><button className="project-cta-btn">View Code</button></Link>
          <Link to="#"><button className="project-cta-btn">View Mockups</button></Link>
          <Link to="#"><button className="project-cta-btn">View Docs</button></Link>
        </div>
    </div>
   )
 }
 
 export default SelectedProject
 