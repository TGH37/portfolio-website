import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faMobileAlt, faTabletAlt} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/css/portfolio.module.css';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { Device } from '../interfaces';

interface Icon {
    accessor: Device
    icon: IconDefinition
    alt: string
};

interface Props {
    selectedDeviceAccessor: Device
    updateSelectedDevice: Function
};

function DeviceIcons(props: Props) {
    const {selectedDeviceAccessor, updateSelectedDevice} = props;

    const icons: Icon[] = [
        {
            accessor: "desktop",
            icon: faLaptop,
            alt: "Preview project in desktop device layout"
        },
        {
            accessor: "tablet",
            icon: faTabletAlt,
            alt: "Preview project in tablet device layout"
        },
        {
            accessor: "mobile",
            icon: faMobileAlt,
            alt: "Preview project in mobile device layout"
        },
    ];

    const getIconAttrs = (accessor: Device) => {
        return accessor === selectedDeviceAccessor ? 
        {
          className: `${styles.deviceIcon} ${styles.activeIcon}`,
          'aria-current': true,
        } :
        {
          className: styles.deviceIcon,
          'aria-current': false,
        };
      };
    
    return (
        <div className={styles.deviceIconContainer}>
            {icons.map((iconObj) => (
                    <FontAwesomeIcon 
                        icon={iconObj.icon}
                        onClick={() => updateSelectedDevice(iconObj.accessor)}
                        key={iconObj.accessor}
                        title="Preview project in desktop (4K) screen layout"
                        {...getIconAttrs(iconObj.accessor)}
                    />
            ))}
        </div>
    );
};

export default DeviceIcons;
