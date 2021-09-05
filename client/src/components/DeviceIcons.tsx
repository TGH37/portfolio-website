import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faDesktop, faMobileAlt, faTabletAlt} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/css/portfolio.module.css';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { deviceIcon } from '../interfaces';

interface Props {}

function DeviceIcons(props: Props) {
    const {} = props

    
    const [activeIconAccessor, setActiveIconAccessor] = useState<deviceIcon>("desktop")

    interface icons {
        accessor: deviceIcon
        icon: IconDefinition
        alt: string
    }

    const icons: icons[] = [
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
    ]

    const getDynClass = (accessor: deviceIcon) => accessor === activeIconAccessor ? `${styles.activeIcon}` : ""
    

    return (
        <div className={styles.deviceIconContainer}>
            {icons.map((iconObj) => (
                <FontAwesomeIcon icon={iconObj.icon}
                className={`${styles.deviceIcon} ${getDynClass(iconObj.accessor)}`}
                onClick={() => setActiveIconAccessor(iconObj.accessor)}
                title="Preview project in desktop (4K) screen layout"
            />
            ))}
        </div>
    )
}

export default DeviceIcons
