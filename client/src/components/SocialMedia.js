/**
 * Author: Tom Hayton
 * Desc: Composition based, reusable social media icons
 */

 import React from 'react'

 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
 
 function SocialMedia(props) {

  return (
    <div className="mob-visible soc-med-nav" style={props.style}>
      <a href="https://www.linkedin.com/in/thomas-hayton-33742b101/"><FontAwesomeIcon icon={faLinkedin} cursor="pointer" size="1x"/></a>
      {props.dividers}
      <a href="https://github.com/TGH37/portfolio-website"><FontAwesomeIcon icon={faGithub} cursor="pointer" size="1x"/></a>
  </div>
   )
 }
 
 export default SocialMedia
 