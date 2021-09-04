/**
 * Author: Tom Hayton
 * Desc: Animated homepage title displaying name and service offerings
 * 
 * Relies on initially rendering the social media element, and then forcing a re-render of the page to add the additional elements in,
   where their position is based on the position of the social media element
 */

import React, { useEffect, useState } from 'react'
import SocialMedia from './SocialMedia'

import { useBreakpoint } from "../contexts/MediaBreakpointCxt"

function HomeTitle() {

  const mediaBreakpoints = useBreakpoint();
  const isMobileMode = mediaBreakpoints.xs || mediaBreakpoints.md ? true : false;

  // Initial styling
  let style = {
    common: {
      display: "flex",
      flexDirection: "row",
      columnGap: "1rem",
      alignItems: "center",
      padding: 0,
    },
    titleName: {

    },
    titleSocMed: {

    },
    titleProfession: {

    }
  }
 
  const [positionObj, setPositionObj] = useState(0);
  let middlePosition = null;
  
  // Dynamic styling
  if(positionObj !== 0)
  {
    middlePosition = (positionObj?.right - positionObj?.width / 2) -32 ;

    style.titleName = {
      ...style.titleName,
      right: middlePosition,
    }

    style.titleProfession = {
      ...style.titleProfession,
      left: middlePosition,
    }
  }
  
  useEffect(() => {
    setPositionObj(document.getElementById('title-soc-med').getBoundingClientRect());

    window.addEventListener("resize", () => {
        setPositionObj(document.getElementById('title-soc-med').getBoundingClientRect());
      })
    }, [])

  return (
    <>
    {/* Must be rendered first for the element queries to recognise the element, for correctly positioning the subsequent elements */}
      <div id="title-soc-med">
        <SocialMedia dividers={<h1> || </h1>} style={{...style.common, ...style.titleSocMed}}/>
      </div>

      {positionObj !== 0 
      ? 
        <>
          <div id="title-name" style={{...style.common, ...style.titleName}}>
            <h1>Tom Hayton</h1>
            {isMobileMode ? null : <h1>|</h1>}
          </div>
          <div id="title-profession-full-stack" style={{...style.common, ...style.titleProfession}}>
            {isMobileMode ? null : <h1>|</h1>}
            <h2>Full Stack Developer</h2>
          </div>
          <div id="title-profession-engineer" style={{...style.common, ...style.titleProfession}}>
            {isMobileMode ? null : <h1>|</h1>}
            <h2>Engineering Contractor</h2>
          </div>
        </>
      : 
        <></>
      }
    </>
  )
}

export default HomeTitle