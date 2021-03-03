/**
 * 
 */

 import React from 'react'
 
  // Logo's
import ReactLogo from '../assets/logos/react-logo.png'
import NodejsLogo from '../assets/logos/Nodejs_logo_adjusted.png'
import MongoDBLogo from '../assets/logos/mongodb_logo_adjusted.png'
import ExpressjsLogo from '../assets/logos/Expressjs_logo_adjusted.png'
import HTMLLogo from '../assets/logos/HTML-JS-CSS_logo.png'
import GitHubLogo from '../assets/logos/GitHub_logo.png'
import AdobeXDLogo from '../assets/logos/AdobeXD_logo.png'
import GimpLogo from '../assets/logos/GIMP_logo.png'


 function TechnologyList() {
   return (
    <div className="tech-logo-container"> {/*TODO (TomH): Export these images as smaller images to improve efficiency, the node.js image is huge at the minute*/}
      <img alt="React.js Logo" src={ReactLogo}/>
      <img alt="Node.js Logo" src={NodejsLogo}/>
      <img alt="Mongo DB Logo" src={MongoDBLogo}/>
      <img alt="Express.js Logo" src={ExpressjsLogo}/>
      <img alt="HTML, Javascript and CSS3 Logo's" src={HTMLLogo}/>
      <img alt="GitHub Logo" src={GitHubLogo}/>
      <img alt="Adobe XD Logo" src={AdobeXDLogo}/>
      <img alt="GNU Image Manipulation Program (GIMP) Logo" src={GimpLogo}/>
    </div>
   )
 }
 
 export default TechnologyList
 