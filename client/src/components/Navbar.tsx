/**
 * Author: Tom Hayton
 * Description: Responsive navbar (vertical in desktop mode, horizontal & hidden in Mob mode)
 */

import React, { useState, useEffect } from 'react';

import SocialMedia from './SocialMedia';

import useBreakpoint from '../hooks/useBreakpoint';
import useCursorHandlers from '../hooks/useCursorHandlers'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/css/layout.module.css';

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const {queryMatch: mediaBreakpoints} = useBreakpoint();
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
        <li ><a href="#portfolio" {...cursorHandlers}>Portfolio</a></li>
        <li><a href="#skills" {...cursorHandlers}>Skills</a></li>
        <li><a href="#about" {...cursorHandlers}>About</a></li>
        <li><a href="#contact" {...cursorHandlers}>Contact</a></li>
      </ul>
      <SocialMedia forwardClassName={`${styles.alignBase}`}/>

    </nav>
  );
};

export default Navbar;
