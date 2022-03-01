import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faMobileAlt, faTabletAlt} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/css/portfolio.module.css';

interface Props {
    selectedDeviceAccessor: Device
    updateSelectedDevice: Function
    imgArry: { accessor: Device; src: any; }[]
};

function DeviceIcons(props: Props) {
    const {selectedDeviceAccessor, updateSelectedDevice, imgArry} = props;

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

    const displayIcons = icons.flatMap( (icon) => {
        const imgMatch = imgArry.find(imgObj => imgObj.accessor === icon.accessor);
        return imgMatch ? [icon] : [];
    })

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
            {displayIcons.map((iconObj) => (
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
