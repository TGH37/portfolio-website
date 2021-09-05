/**
 * Author: Tom Hayton
 * Description: Container for the portfolio section of the site
 */

import React, { useMemo, useState } from 'react';
import styles from '../styles/css/portfolio.module.css';

import ProjectCardContainer from './ProjectCardContainer';
import SelectedProject from './SelectedProject';

import data, { technologyLogos } from '../utils/projectData';
import type {projectData, projectNames, technologies} from '../interfaces'


function PortfolioSection() {
  
  const showcaseProjects: projectNames[] = [
    "freecycle", 'ipTracker', 'divData'
  ]

  const getProjectIdx = (accessor: projectNames): number => {
    if(!data) return 0;
    const matchedProjects: projectData[] = data.filter((project: projectData) => project.accessor === accessor);
    if(!matchedProjects.length) return 0;
    return data.indexOf(matchedProjects[0]);
  }
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(getProjectIdx("freecycle"));
  
  const selectedProject = useMemo(() => data[activeProjectIdx], [activeProjectIdx])
  

  return (
    <section id="portfolio" className={styles.portfolioContainer}>
      <h1 className={styles.selectedProjectTitle}>Featured Projects</h1>
      <ProjectCardContainer />
      <SelectedProject projectData={selectedProject}/>
    </section>
  )
};
 
export default PortfolioSection;