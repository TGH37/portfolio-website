import { useContext, } from 'react';
import styles from '../styles/css/portfolio.module.css';
import ProjectCardContainer from './ProjectCardContainer';
import SelectedProject from './SelectedProject';
import { GlobalCtx } from '../contexts/GlobalCtx';

function PortfolioSection() {
  const { projectData } = useContext(GlobalCtx);

  return projectData.length ? (
    <section id="portfolio" className={styles.portfolioContainer}>
      <h1 className={styles.selectedProjectTitle}>Featured Projects</h1>
      <ProjectCardContainer />
      <SelectedProject/>
    </section>
  ) : <></>;
};
 
export default PortfolioSection;