/**
 * Author: Tom Hayton
 * Description: Responsive navbar (vertical in desktop mode, horizontal & hidden in Mob mode)
 */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useBreakpoint } from '../contexts/MediaBreakpointCxt'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false)

  const mediaBreakpoints = useBreakpoint();

  const menuIconRespStyle = () => mediaBreakpoints.xs || mediaBreakpoints.md ? {visibility: "visible"} : {visibility: "hidden"}

  const NavbarListRespStyle = () => {
    let returnStyle = {}
    if(mediaBreakpoints.lg || mediaBreakpoints.xl) {
      // setMenuVisible(true)
      returnStyle = {...returnStyle, visibility: "visible"};
    } else {
      returnStyle = {...returnStyle, visibility: menuVisible ? "visible" : "hidden"};
    }

    return returnStyle;
  }

  return (
    <nav>
      <FontAwesomeIcon className="menu-icon" icon={faBars} size="2x" onClick={()=> setMenuVisible(!menuVisible)} style={menuIconRespStyle()}/>
      <ul style={NavbarListRespStyle()}>
        <li><Link to="#">Portfolio</Link></li>
        <li><Link to="#">Services</Link></li>
        <li><Link to="#">About</Link></li>
        <li><Link to="#">Contact</Link></li>
      </ul>
      <div className="mob-visible soc-med-nav">
        <a href="https://www.linkedin.com/in/thomas-hayton-33742b101/"><FontAwesomeIcon icon={faLinkedin} cursor="pointer" size="2x"/></a>
        <a href="https://github.com/TGH37/portfolio-website"><FontAwesomeIcon icon={faGithub} cursor="pointer" size="2x"/></a>
      </div>
    </nav>
  )
}

export default Navbar
