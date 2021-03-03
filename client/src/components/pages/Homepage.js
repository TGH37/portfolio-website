/**
 * Author: Tom Hayton
 * Description: The homepage for my personal portfolio website
 */

import React from 'react'
import Navbar from '../Navbar';
import HomeTitle from "../HomeTitle.js"
import PortfolioSection from '../PortfolioSection';

function Homepage() {
  return (
    <>
      <Navbar />

      <header id="header-container">
        <HomeTitle />
      </header>

      <PortfolioSection />
      <section>
        <h1 className="selected-project__title">My Skills</h1>
        <h1 className="selected-project__title">About Me</h1>
        <h1 className="selected-project__title">Contact Me</h1>
      </section>

    </>
  )
}

export default Homepage;