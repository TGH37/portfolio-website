/**
 * 
 */

 import React, { useState, useEffect } from 'react'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faToggleOn, faLaptop, faDesktop, faMobileAlt, faTabletAlt} from '@fortawesome/free-solid-svg-icons'
 
 //Pictures
  import FreecycleNominal4k from '../assets/logos/AdobeXD_logo.png' /**Test to see if device selection works, to be replaced with actual picture once ready*/
  import FreecycleNominalDesktop from '../assets/freecycle_remake_home_laptop.png'
  // import FreecycleNominalTablet from '../assets/'
  // import FreecycleNominalMobile from '../assets/'

  // import FreecycleRemaster4k from '../assets/'
  import FreecycleRemasterDesktop from '../assets/freecycle_remaster_home_laptop.png'
  // import FreecycleRemasterTablet from '../assets/'
  // import FreecycleRemasterMobile from '../assets/'

  function ProjectDevicePreview({ project }) {
   
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


    const toggleStyle = (isToggleActive) => {
      switch(isToggleActive) {
        case false:
          return {
            color: "#cecece", //TODO (Tomh): relpace hard coded colours with theme colours using context
            transform: "rotate(180deg)",
            cursor: "pointer",
            visibility: projectDetails.isRemasteredProject && !toggleState ? "visible" : "hidden",
          }
          case true:
            return {
              color: "#78c0ff",
              cursor: "pointer",
              visibility: projectDetails.isRemasteredProject && toggleState ? "visible" : "hidden",
          }
      }

    }

    const deviceStyle = (inDevice) => selectedDevice === inDevice ? {color: "var(--tertiaryColor)"} : {}

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
      <div id="project-device-preview-container">
        <div id="toggle-btn-container" style={toggleStyle("container")}>
          <span style={projectDetails.isRemasteredProject ? {} : {visibility:"hidden"}}>{toggleState ? "Remastered" : "Original"}</span>
          <FontAwesomeIcon icon={faToggleOn} className="remaster-toggle-btn" onClick={()=> setToggleState(!toggleState)} style={toggleStyle(toggleState)}/>
        </div>
        <div id="device-icon-container">
          <FontAwesomeIcon icon={faDesktop}   className="device-icon" deviceHandle="4k"      style={deviceStyle("4k")}      onClick={() => setSelectedDevice("4k")}      title="Preview project in desktop (4K) screen layout" />
          <FontAwesomeIcon icon={faLaptop}    className="device-icon" deviceHandle="desktop" style={deviceStyle("desktop")} onClick={() => setSelectedDevice("desktop")} title="Preview project in desktop (standard) screen layout" />
          <FontAwesomeIcon icon={faTabletAlt} className="device-icon" deviceHandle="tablet"  style={deviceStyle("tablet")}  onClick={() => setSelectedDevice("tablet")}  title="Preview project in tablet screen layout" />
          <FontAwesomeIcon icon={faMobileAlt} className="device-icon" deviceHandle="mobile"  style={deviceStyle("mobile")}  onClick={() => setSelectedDevice("mobile")}  title="Preview project in mobile phone screen layout" />
        </div>
        <div id="project-preview-image-container">
          <img alt={`Preview of the ${project.get} project, shown in ${selectedDevice} screen layout`} src={determineDeviceImage()} className="project-preview-image"/>
        </div>
      </div>
   )
 }
 
 export default ProjectDevicePreview
 