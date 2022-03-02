/**
 * Author: Tom Hayton
 * Desc: Animated homepage title displaying name and service offerings
 * 
 * Relies on initially rendering the social media element, and then forcing a re-render of the page to add the additional elements in,
   where their position is based on the position of the social media element
 */

import React, { useEffect, useRef, useState } from 'react'
import SocialMedia from './SocialMedia'

import useBreakpoint from "../hooks/useBreakpoint"
import styles from '../styles/css/hero.module.css';

import Hero_500 from '../assets/hero_500.jpg';
import Hero_1000 from '../assets/hero_1000.jpg';
import Hero_1500 from '../assets/hero_1500.jpg';

function HomeTitle() {

  const socMedRef = useRef(null);
  const {queryMatch: mediaBreakpoints} = useBreakpoint();
  const isMobileMode = mediaBreakpoints.xs || mediaBreakpoints.md ? true : false;

  // Initial styling
  const style = {
    titleName: {},
    titleSocMed: {},
    titleProfession: {}
  }
 
  const [positionDatum, setPositionDatum] = useState(0);
  
  // Dynamic styling
  if(positionDatum !== 0)
  {
    style.titleName = {
      ...style.titleName,
      right: positionDatum,
    }

    style.titleProfession = {
      ...style.titleProfession,
      left: positionDatum,
    }
  };

  const getPositioningDatumElementRect = () => {
    if(!socMedRef) return;
    const socMedEl = socMedRef.current;
    const SocMedRect = socMedEl.getBoundingClientRect();
    setPositionDatum((SocMedRect.right - SocMedRect.width / 2) -32);
  }
  
  useEffect(() => {
    getPositioningDatumElementRect();
    window.addEventListener("resize", () => getPositioningDatumElementRect());
  }, [])

  return (
    <section className={styles.heroContainer}>
      <img 
        src={Hero_500} 
        alt="Tom Hayton, full-stack website developer"
        className={`${styles.heroImg}`}
        srcSet={`
        ${Hero_500} 500w,
        ${Hero_1000} 1000w,
        ${Hero_1500} 1500w,
        `} 
    />
    {/* Must be rendered first for the element queries to recognise the element, for correctly positioning the subsequent elements */}
      <div id="title-soc-med" ref={socMedRef} className={styles.titleSocMed}>
        <SocialMedia dividers={<h1> // </h1>} forwardClassName={`${styles.heroTitleLine}`} style={style.titleSocMed}/>
      </div>

      {positionDatum !== 0 
      ? 
        <>
          <div id="title-name" className={`${styles.heroTitleLine} ${styles.titleName}`} style={style.titleName}>
            <h1>Tom Hayton</h1>
          </div>
          <div id="title-profession-full-stack" className={`${styles.heroTitleLine} ${styles.titleProfessionFullStack}`} style={style.titleProfession}>
            <h2>Web Developer</h2>
          </div>
        </>
      : 
        <></>
      }


      
    </section>
  )
}

export default HomeTitle