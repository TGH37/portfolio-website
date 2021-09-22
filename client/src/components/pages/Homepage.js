/**
 * Author: Tom Hayton
 * Description: The homepage for my personal portfolio website
 */

import React, {useEffect, useState} from 'react';
import useBreakpoint  from '../../hooks/useBreakpoint';


import projectData from "../../db/projectData.json";
import Navbar from '../Navbar';
import Hero from "../Hero";
import PortfolioSection from '../PortfolioSection';
import SkillsSection from '../SkillsSection';
import AboutSection from '../AboutSection';
import Contact from '../Contact';
import AnimatedCursor from '../AnimatedCursor';
import CROConvergenceWireframe from '../../assets/svg/cro-convergence-wireframe.svg'

function Homepage() {
  const mediaBreakpoints = useBreakpoint();
  const [shouldDisplayCursor, setShouldDisplayCursor] = useState(false)
  useEffect(() => {
    if(!mediaBreakpoints.md) setShouldDisplayCursor(true);
    else setShouldDisplayCursor(false);
    
  }, [mediaBreakpoints.md]);

  return (
    <>
      <Navbar />

      <Hero />
      <PortfolioSection projectData={projectData}/>
        <h1 className="selected-project__title">My Skills</h1>
        <SkillsSection />
      <section>
        <h1 className="selected-project__title">About Me</h1>
        <AboutSection />
      </section>
      <section>
        <h1 className="selected-project__title">Contact Me</h1>
        <Contact />
      </section>
      {shouldDisplayCursor ? <AnimatedCursor /> : <></>}
    </>
  )
}

export default Homepage;