/**
 * Author: Tom Hayton
 * Desc: Composition based, reusable social media icons
 */

 import React from 'react';
 import styles from '../styles/css/misc.module.css';

 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
 
 function SocialMedia(props) {
   const links = {
     linkedIn: "https://www.linkedin.com/in/thomas-hayton-33742b101/",
     github: "https://github.com/TGH37/portfolio-website",
   };

  return (
    <div className={`${styles.socMedNav} mob-visible ${props.forwardClassName}`} style={props.style}>
      <a href={links.linkedIn} target="_blank"><FontAwesomeIcon icon={faLinkedin} cursor="pointer" size="1x"/></a>
      {props.dividers}
      <a href={links.github} target="_blank"><FontAwesomeIcon icon={faGithub} cursor="pointer" size="1x"/></a>
    </div>
   );
 };
 
 export default SocialMedia;
    