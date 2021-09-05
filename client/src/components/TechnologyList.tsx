/**
 * 
 */

 import React from 'react';
 import styles from '../styles/css/portfolio.module.css';
 
import { technologyLogos } from '../utils/projectData';
import type { technologies } from '../interfaces';

interface Props {
  technologiesUsed: technologies[]
};

function TechnologyList(props: Props) {
  const { technologiesUsed } = props;
  

  return (
    <div className={styles.techLogoContainer}> 
      {technologiesUsed.map((accessor: technologies) => {
        const {src, alt} : {src: JSX.Element, alt: string} = technologyLogos.get(accessor);
        return <div>{src}</div>
      })}
    </div>
  );
};
 
export default TechnologyList;
 