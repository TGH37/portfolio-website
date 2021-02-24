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

      <section>
        <h1>Portfolio</h1>
        <h1>My Services</h1>
        <h1>About Me</h1>
        <h1>Contact Me</h1>
      </section>

      <PortfolioSection />
    </>
  )
}

export default Homepage;