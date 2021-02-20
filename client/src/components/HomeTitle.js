/**
 * Author: Tom Hayton
 * Desc: Animated homepage title displaying name and service offerings
 */

import React from 'react'

function HomeTitle() {
  const style = {
    common: {
      display: "flex",
      flexDirection: "row",
      columnGap: "1rem",
      alignItems: "center",
    },
    titleName: {
    },
    titleSocMed: {
    },
    titleProfession: {

    }
  }

  return (
    <div>
      <div className="title-name" style={{...style.common, ...style.titleName}}>
        <h1>Tom Hayton</h1>
        <h1>|</h1>
      </div>
      <div className="title-soc-med" style={{...style.common, ...style.titleSocMed}}>
        <span>LinkedIn</span>
        <h1> || </h1>
        <span>Github</span>
      </div>
      <div className="title-profession" style={{...style.common, ...style.titleProfession}}>
        <h1>|</h1>
        <h2>Full Stack Developer</h2>
      </div>
      <div className="title-profession" style={{...style.common, ...style.titleProfession}}>
        <h1>|</h1>
        <h2>Engineering Contractor</h2>
      </div>
    </div>
  )
}

export default HomeTitle
