/**
 * Author: Tom Hayton
 * Description: The homepage for my personal portfolio website
 */

import React from 'react'

import projectData from "../../db/projectData.json";
import Navbar from '../Navbar';
import Hero from "../Hero";
import PortfolioSection from '../PortfolioSection';
import SkillsSection from '../SkillsSection';

function Homepage() {
  return (
    <>
      <Navbar />

      {/* <header id="header-container"> */}
        <Hero />
      {/* </header> */}

      <PortfolioSection projectData={projectData}/>
        <h1 className="selected-project__title">My Skills</h1>
        <SkillsSection />
      <section>
        <h1 className="selected-project__title">About Me</h1>
      </section>
      <section>
        <h1 className="selected-project__title">Contact Me</h1>
      </section>

    </>
  )
}

export default Homepage;