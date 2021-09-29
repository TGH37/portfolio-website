import { useContext, } from 'react';
import styles from '../styles/css/portfolio.module.css';
import ProjectCardContainer from './ProjectCardContainer';
import SelectedProject from './SelectedProject';
import { GlobalCtx } from '../contexts/GlobalCtx';

function PortfolioSection() {
  const { projectData } = useContext(GlobalCtx);

  return projectData.length ? (
    <section id="portfolio" >
      <h1 className={styles.sectionTitle}>Featured Projects</h1>
      <div className={styles.portfolioContainer}>
        <ProjectCardContainer />
        
        <SelectedProject/>
      </div>
    </section>
  ) : <></>;
};
 
export default PortfolioSection;