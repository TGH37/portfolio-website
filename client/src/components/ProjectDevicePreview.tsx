/**
 * 
 */

 import React, { useState, useEffect, CSSProperties } from 'react'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faToggleOn, faLaptop, faDesktop, faMobileAlt, faTabletAlt} from '@fortawesome/free-solid-svg-icons'
 import styles from '../styles/css/portfolio.module.css'
 
 //Pictures
  import FreecycleNominal4k from '../assets/logos/AdobeXD_logo.png' /**Test to see if device selection works, to be replaced with actual picture once ready*/
  import FreecycleNominalDesktop from '../assets/freecycle_remake_home_laptop.png'
  // import FreecycleNominalTablet from '../assets/'
  // import FreecycleNominalMobile from '../assets/'

  // import FreecycleRemaster4k from '../assets/'
  import FreecycleRemasterDesktop from '../assets/freecycle_remaster_home_laptop.png'
  // import FreecycleRemasterTablet from '../assets/'
  // import FreecycleRemasterMobile from '../assets/'

  import { projectData } from '../interfaces'
import DeviceIcons from './DeviceIcons'

  interface Props {
    projectData: projectData
  }

  function ProjectDevicePreview(props: Props) {
   const { projectData } = props
    //TODO (Tomh): Create and import data-structure for project information to make it versatile to add other projects. 
    const projectDetails = {
      title: "freecycle",
      isRemasteredProject: true,
      imagesNominal: {
        image4k: FreecycleNominal4k,
        imageDesktop: FreecycleNominalDesktop,
        imageTablet: FreecycleNominalDesktop,
        imageMobile: FreecycleNominalDesktop,
      },
      imagesRemastered: {
        image4k: FreecycleRemasterDesktop,
        imageDesktop: FreecycleRemasterDesktop,
        imageTablet: FreecycleRemasterDesktop,
        imageMobile: FreecycleRemasterDesktop,
      },
    };

    const [toggleState,   setToggleState] = useState(true);
    const [selectedDevice, setSelectedDevice] = useState("desktop");
    const [previewImages, setPreviewImages] = 
    useState({
        nominal: projectDetails.imagesNominal.imageDesktop,
        remastered: projectDetails.imagesRemastered.imageDesktop
    });

    useEffect(() => {
      setPreviewImages(() => {
        switch(selectedDevice) {
          case "4k":
            return {
              nominal: projectDetails.imagesNominal.image4k,
              remastered: projectDetails.imagesRemastered.image4k,
            }
          case "desktop":
            return {
              nominal: projectDetails.imagesNominal.imageDesktop,
              remastered: projectDetails.imagesRemastered.imageDesktop,
            }
          case "tablet":
            return {
              nominal: projectDetails.imagesNominal.imageTablet,
              remastered: projectDetails.imagesRemastered.imageTablet,
            }
          case "mobile":
            return {
              nominal: projectDetails.imagesNominal.imageMobile,
              remastered: projectDetails.imagesRemastered.imageMobile,
            }
          default:  
          return {
            nominal: projectDetails.imagesNominal.imageDesktop, 
            remastered: projectDetails.imagesRemastered.imageDesktop
          }
        }
      });
    }, [selectedDevice]);


    const determineDeviceImage = () => {
      if(!previewImages.nominal) return  projectDetails.imagesNominal.imageDesktop;

      if(projectDetails.isRemasteredProject) {
        return !toggleState ? previewImages.nominal : previewImages.remastered;
      } else {
        return previewImages.nominal;
      }
    }
    
    return (
      <div className={styles.projectPreviewContainer}>

        <DeviceIcons />
        <div className={styles.projectPreviewImgContainer}>
          <img alt={`Preview of the ${projectData.title} project, shown in ${selectedDevice} device layout`} src={determineDeviceImage()} />
        </div>
      </div>
   )
 }
 
 export default ProjectDevicePreview
 