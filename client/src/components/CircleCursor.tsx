import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';
import React, { forwardRef, RefObject, useEffect, useRef, useState } from 'react';
import styles from '../styles/css/misc.module.css';

interface Props {
    x?: number
    y?: number
};

const CircleCursor = (props: Props) => {
    const {
        x,
        y,
    } = props;

    const {left, top, transform} = useSpring({
        to: {left: x, top: y, transform: "translate(-50%, -50%)"},
        reset: false,
        config: {
            precision: 1,
            duration: 1
        },
    })

    useEffect(() => {
        left.start({to: x})
        top.start({to: y})
        transform.start({to: "translate(-50%, -50%)"})
        })

    return (
        <animated.svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" className={styles.cursorCircle} style={{left, top, transform}}>
            <circle cx={7.5} cy={7.5} r={4.5}/>
        </animated.svg>
    );
}


export default CircleCursor;
