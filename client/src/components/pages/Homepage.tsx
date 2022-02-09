/**
 * Author: Tom Hayton
 * Description: The homepage for my personal portfolio website
 */

import {useEffect, useState, useContext} from 'react';
import useBreakpoint from '../../hooks/useBreakpoint';
import { GlobalCtx } from '../../contexts/GlobalCtx';

import projectData from "../../utils/projectData";
import Navbar from '../Navbar';
import Hero from "../Hero";
import PortfolioSection from '../PortfolioSection';
import SkillsSection from '../SkillsSection';
import AboutSection from '../AboutSection';
import Contact from '../Contact';
import AnimatedCursor from '../AnimatedCursor';

function Homepage() {
  const mediaBreakpoints = useBreakpoint();
  const [shouldDisplayCursor, setShouldDisplayCursor] = useState(false);

  const { queryMatch } = mediaBreakpoints;

  useEffect(() => {
    if(!queryMatch.md) setShouldDisplayCursor(true);
    else setShouldDisplayCursor(false);
  }, [queryMatch.md]);

  const {setProjectData} = useContext(GlobalCtx);

  useEffect(() => {
    // incase I decide to implement project data fetching
    setProjectData(projectData);
  }, [])
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <PortfolioSection/>
        <SkillsSection />
        <AboutSection />
        <Contact />
      </main>
      {shouldDisplayCursor ? <AnimatedCursor /> : <></>}
    </>
  )
}

export default Homepage;