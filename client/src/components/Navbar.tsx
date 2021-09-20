/**
 * Author: Tom Hayton
 * Description: Responsive navbar (vertical in desktop mode, horizontal & hidden in Mob mode)
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SocialMedia from './SocialMedia';

import { useBreakpoint } from '../contexts/MediaBreakpointCxt';
import useCursorHandlers from '../hooks/useCursorHandlers'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/css/layout.module.css';

export type mediaBreakpoints = {
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
}
export type mediaBreakpointStrings = {
  xs: string
  sm: string
  md: string
  lg: string
}


function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const mediaBreakpoints:mediaBreakpoints = useBreakpoint();
  const cursorHandlers = useCursorHandlers();

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
        <li ><Link to="#" {...cursorHandlers}>Portfolio</Link></li>
        <li><Link to="#" {...cursorHandlers}>Skills</Link></li>
        <li><Link to="#" {...cursorHandlers}>About</Link></li>
        <li><Link to="#" {...cursorHandlers}>Contact</Link></li>
      </ul>
      <SocialMedia forwardClassName={`${styles.alignBase}`}/>

    </nav>
  );
};

export default Navbar;
