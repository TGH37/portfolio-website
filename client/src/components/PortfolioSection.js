/**
 * Author: Tom Hayton
 * Description: Container for the portfolio section of the site
 */

 import React, { useState } from 'react'
 import { Link } from 'react-router-dom'

 import ProjectCard from './ProjectCard'

//  Pictures
import FreecycleOriginal from '../assets/original.png'
import FreecycleRemaster from '../assets/remaster.png'
import FreecyclePreviewOriginal from '../assets/freecycle_remake_home_laptop.png'
import FreecyclePreviewRemaster from '../assets/freecycle_remaster_home_laptop.png'

// Logo's
import ReactLogo from '../assets/logos/react-logo.png'
import NodejsLogo from '../assets/logos/Nodejs_logo_adjusted.png'
import MongoDBLogo from '../assets/logos/mongodb_logo_adjusted.png'
import ExpressjsLogo from '../assets/logos/Expressjs_logo_adjusted.png'
import HTMLLogo from '../assets/logos/HTML-JS-CSS_logo.png'
import AdobeXDLogo from '../assets/logos/AdobeXD_logo.png'
import GimpLogo from '../assets/logos/GIMP_logo.png'


//  Icons
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faToggleOn, faToggleOff, faLaptop, faDesktop, faMobileAlt, faTabletAlt} from '@fortawesome/free-solid-svg-icons'

 function PortfolioSection() {
  
  const [activeProjectPreview, setActiveProjectPreview] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  return (
    <section id="portfolio-section">
      <h1>Projects I've Worked on</h1>
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
        <ProjectCard 
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
        />
      </div>





      <div>
        <h3 id="selected-project-title">Freecycle</h3>
        <div id="toggle-btn-container">
          <FontAwesomeIcon icon={faToggleOn} className="remaster-toggle-btn" style={{color: "#78c0ff"}}/>
          <FontAwesomeIcon icon={faToggleOn} className="remaster-toggle-btn" style={{color: "#cecece", transform: "rotate(180deg)"}}/>
        </div>
        <div>Divider</div> 
        <div id="project-device-preview-container">
          <div id="device-icon-container">
            <FontAwesomeIcon icon={faDesktop} className="device-icon" title="Preview project in desktop (4K) screen layout"/>
            <FontAwesomeIcon icon={faLaptop} className="device-icon" title="Preview project in desktop (standard) screen layout"/>
            <FontAwesomeIcon icon={faTabletAlt} className="device-icon" title="Preview project in tablet screen layout"/>
            <FontAwesomeIcon icon={faMobileAlt} className="device-icon" title="Preview project in mobile phone screen layout"/>
          </div>
          <div id="project-preview-image-container">
            <img alt="Project preview shown in selected screen layout" src={FreecyclePreviewRemaster} className="project-preview-image"/>
            <img alt="Project preview shown in selected screen layout" src={FreecyclePreviewOriginal} className="project-preview-image"/>
          </div>
        </div>
        <div id="project-details-container">
          <h5>Description</h5>
          <p>For this project, I chose to completely remake and remaster freecycle.org, using MERN stack technologies. The remastered website uses branding assets taken from the original website and social media. Freecycle is a website that enables users to offer their discarded items to other, local users for free. It is a non-for-profit organisation run mainly by volunteers.</p>
          <h5>Improvements Made</h5>
          <span>Please see <Link to="#">handover documentation</Link> for more information</span>
          <ul>
            <li>Responsive Website</li>
            <li>Simplified Colour Palette</li>
            <li>Enhanced User Features</li>
          </ul>
          <div>
            <h5>Technologies Used</h5>
            <div id="tech-logo-container"> {/*TODO (TomH): Export these images as smaller images to improve efficiency, the node.js image is huge at the minute*/}
              <img alt="React.js Logo" src={ReactLogo}/>
              <img alt="Node.js Logo" src={NodejsLogo}/>
              <img alt="Mongo DB Logo" src={MongoDBLogo}/>
              <img alt="Express.js Logo" src={ExpressjsLogo}/>
              <img alt="HTML, Javascript and CSS3 Logo's" src={HTMLLogo}/>
              <img alt="Adobe XD Logo" src={AdobeXDLogo}/>
              <img alt="GNU Image Manipulation Program (GIMP) Logo" src={GimpLogo}/>
            </div>
          </div>
          <div id="project-cta-btn-container">
            <Link to="#"><button className="project-cta-btn">View Site</button></Link>
            <Link to="#"><button className="project-cta-btn">View Code</button></Link>
            <Link to="#"><button className="project-cta-btn">View Mockups</button></Link>
            <Link to="#"><button className="project-cta-btn">View Docs</button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
 
 export default PortfolioSection