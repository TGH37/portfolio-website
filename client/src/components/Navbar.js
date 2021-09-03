/**
 * Author: Tom Hayton
 * Description: Responsive navbar (vertical in desktop mode, horizontal & hidden in Mob mode)
 */

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import SocialMedia from './SocialMedia'

import { useBreakpoint } from '../contexts/MediaBreakpointCxt'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/css/layout.module.css'


function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const mediaBreakpoints = useBreakpoint();

  const getNavDynAttributes = () => {
    const dynamicAttrs = {
      'aria-expanded': menuVisible,
      className: menuVisible ? `${styles.showMenu}` : `${styles.hideMenu}`,
    };
    const staticClassNames = `${styles.Navbar}`;
    return {
      ...dynamicAttrs,
      className: staticClassNames + " " + dynamicAttrs.className
    };
  };

  useEffect(() => {
    setMenuVisible(true);
  }, [mediaBreakpoints.md]);

  return (
    <nav {...getNavDynAttributes()}>
      <FontAwesomeIcon className={`${styles.hideDownToTablet} ${styles.menuIcon}`} icon={faBars} size="2x" onClick={()=> setMenuVisible(!menuVisible)}/>
      <ul>
        <li><Link to="#">Portfolio</Link></li>
        <li><Link to="#">Skills</Link></li>
        <li><Link to="#">About</Link></li>
        <li><Link to="#">Contact</Link></li>
      </ul>
      <SocialMedia forwardClassName={`${styles.alignBase}`}/>

    </nav>
  );
};

export default Navbar;
