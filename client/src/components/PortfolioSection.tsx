import { useContext, } from 'react';
import styles from '../styles/css/portfolio.module.css';
import ProjectCardContainer from './ProjectCardContainer';
import SelectedProject from './SelectedProject';
import { GlobalCtx } from '../contexts/GlobalCtx';
import Carousel from './Carousel';
import useBreakpoint from '../hooks/useBreakpoint';

function PortfolioSection() {
  const { projectData } = useContext(GlobalCtx);
  const {queryMatch: mediaBreakpoints} = useBreakpoint();
  const isMobileMode = !mediaBreakpoints.sm;

  return projectData.length ? (
    <section id="portfolio" >
      <h1 className={styles.sectionTitle}>Featured Projects</h1>
      <div className={styles.portfolioContainer}>
        {<Carousel />}
        {/* {isMobileMode ? <ProjectCardContainer /> : <Carousel />} */}
        <SelectedProject/>
      </div>
    </section>
  ) : <></>;
};
 
export default PortfolioSection;