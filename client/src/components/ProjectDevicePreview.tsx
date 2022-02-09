import { useState, useContext, ReactElement } from 'react';
import styles from '../styles/css/portfolio.module.css';
import DeviceIcons from './DeviceIcons';
import { GlobalCtx } from '../contexts/GlobalCtx';

interface Props {

};

function ProjectDevicePreview(props: Props) {
  const { } = props;
  const { projectData, selectedProjectIdx } = useContext(GlobalCtx);

  const [selectedDeviceAccessor, setSelectedDeviceAccessor] = useState<Device>("desktop");
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const deviceImgs = projectData[selectedProjectIdx].deviceImgs;

  const updateSelectedDevice = (deviceAccessor: Device) => {
    setSelectedDeviceAccessor(deviceAccessor)
    setIsLoading(true);
  };
  const handleLoad = () => setIsLoading(false);

  const getDeviceImage = (): ReactElement => {
    if(!deviceImgs.length) return <h2>No Image Found</h2>;
    const device = deviceImgs.find(deviceObj => deviceObj.accessor === selectedDeviceAccessor);
    return <img src={device.src} alt={`Project preview on a ${selectedDeviceAccessor} device`} onLoad={() => handleLoad()}/>;
  };
  
  return (
    <div className={styles.projectPreviewContainer}>
      {isLoading ? <p>Loading...</p> : <></>}
      <DeviceIcons selectedDeviceAccessor={selectedDeviceAccessor} updateSelectedDevice={updateSelectedDevice}/>
      <div className={styles.projectPreviewImgContainer}>
        {getDeviceImage()}
      </div>
    </div>
  );
};
 
export default ProjectDevicePreview;
 