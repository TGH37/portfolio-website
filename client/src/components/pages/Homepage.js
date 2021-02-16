/**
 * Author: Tom Hayton
 * Description: The homepage for my personal portfolio website
 */

import React from 'react'
import HomeTitle from "../HomeTitle.js"

function Homepage() {
  return (
    <div>
      <div>
        <HomeTitle />
      </div>

      <h1>Portfolio</h1>
      <h1>My Services</h1>
      <h1>About Me</h1>
      <h1>Contact Me</h1>
    </div>
  )
}

export default Homepage;