import styles from '../styles/css/portfolio.module.css';
import { technologyLogos } from '../utils/projectData';

interface Props {
  technologiesUsed: technologies[]
};

function TechnologyList(props: Props) {
  const { technologiesUsed } = props;
  
  return (
    <div className={styles.techLogoContainer}> 
      {technologiesUsed.map((accessor: technologies) => {
        const { src } : {src: JSX.Element} = technologyLogos.get(accessor);
        return <div key={accessor}>{src}</div>
      })}
    </div>
  );
};
 
export default TechnologyList;
 