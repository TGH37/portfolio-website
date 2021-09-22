import React, { useContext, useEffect, useRef, useState } from 'react';
import stylesheetStyles from '../styles/css/misc.module.css';
import useMousePosition from "../hooks/useMousePosition";
import { useSpring, animated, useSpringRef, Spring, useChain, useSprings, AnimatedComponent } from 'react-spring'
import { CursorCtx } from '../contexts/CursorCtx';
import CustomCursor from './CustomCursor'
import CircleCursor from './CircleCursor';

interface Props {
};



function AnimatedCursor(props: Props) {
    const { } = props;
    const { clientX, clientY } = useMousePosition();
    const [isStatic, setIsStatic] = useState<boolean>(false);
    const [,,hoverElement] = useContext(CursorCtx);
    const [cursorSatelliteCoords, setCursorSatelliteCoords] = useState<{left: number, right: number, top: number, bottom: number, width: number, height: number}>({left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0})
    const el = hoverElement ? hoverElement as HTMLElement : null;
    const boxPosX = hoverElement ? cursorSatelliteCoords.left : clientX;
    const boxPosY = hoverElement ? cursorSatelliteCoords.top : clientY;
    // console.log("x: "+boxPosX+", y: "+ boxPosY + !!hoverElement)
    const cursorSatelliteRef = useRef(null);

    const {left, top, transform} = useSpring({
        to: {left: boxPosX, top: boxPosY, transform: "translate(-25%, -50%)"},
        reset: false,
        config: {
            precision: 1
        },
        onRest: () => {if(!isStatic) setIsStatic(true)},
        onStart: () => {if(isStatic) setIsStatic(false)}
    })

    const {height} = useSpring({height: "50px"});
    const {width} = useSpring({width: "50px"});

    const calcDims = (config: "width" | "height"): string => {
        if(hoverElement !== null) return `${config === "width" ? cursorSatelliteCoords.width : cursorSatelliteCoords.height}px`;
        const cursorEl = cursorSatelliteRef.current as SVGElement
        const distanceVect2D = Math.sqrt(Math.pow(Math.abs(boxPosX - cursorEl.getBoundingClientRect().left),2) + Math.pow(Math.abs(boxPosY - cursorEl.getBoundingClientRect().top),2));
        return `${20 + (distanceVect2D/1000) * 100}px`
    }
    
    const getTranslate = () => {
        return hoverElement === null ? "translate(-50%, -50%)" : "translate(0%, 0%)";

    }
    const {x: satX} = useSpring({x: 0, reset: false, config:{duration: 200}});
    const {x: satXNeg} = useSpring({x: 0, reset: false, config:{duration: 200}});
    const {y: satY} = useSpring({y: 0, reset: false, config:{duration: 200}});
    const {y: satYNeg} = useSpring({y: 0, reset: false, config:{duration: 200}});

    const cursorSVGInitialWidth = 400;
    const cursorSVGInitialHeight = 400;


    const getCursorWidth = () => {
        if(el === null) return 0;
        const elementAspectRatio = cursorSatelliteCoords.width / cursorSatelliteCoords.height;
        return (elementAspectRatio - 1) / 2 // starting AR === 1, so increase in AR === newAR - 1, then half as origin is in the middle
    }
    const getCursorHeight = () => {
        if(el === null) return 0;
        return cursorSatelliteCoords.height;
        const elementAspectRatio = cursorSatelliteCoords.height / cursorSatelliteCoords.width;
        return (elementAspectRatio - 1) / 2 // starting AR === 1, so increase in AR === newAR - 1, then half as origin is in the middle
    }
    
    useEffect(() => {
        left.start({to: boxPosX})
        top.start({to: boxPosY})
        transform.start({to: getTranslate()})
        height.start(
            {
                to: calcDims("height"),
                config: {
                    duration: isStatic ? 200 : 200,
                    
                }
            }
        );
        width.start(
            {
                to: calcDims("width"),
                config: {
                    duration: isStatic ? 200 : 200,
                }
            }
        );

        satX.start({to: cursorSVGInitialWidth * getCursorWidth()})
        satXNeg.start({to: -cursorSVGInitialWidth * getCursorWidth()})
        satY.start({to: cursorSVGInitialHeight * getCursorHeight()})
        satYNeg.start({to: -cursorSVGInitialHeight * getCursorHeight()})
    })


        useEffect(() => {
            if(el === null) {
                setCursorSatelliteCoords({left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0});
                return;
            };
            const paddingX = 10, paddingY = 5;

            setCursorSatelliteCoords({
                left: el.getBoundingClientRect().left - paddingX,
                top: el.getBoundingClientRect().top,
                width: el.getBoundingClientRect().width + 2 * paddingX,
                height: el.getBoundingClientRect().height,
                right: el.getBoundingClientRect().left + el.getBoundingClientRect().width + 2 * paddingX,
                bottom: el.getBoundingClientRect().top + el.getBoundingClientRect().height,
            })
        }, [el])
        useEffect(() => {
            if(el === null) return;
            // console.log(hoverElement)
        }, [el, cursorSatelliteCoords])

        
    return (
    
                <>
                    <CircleCursor x={clientX} y={clientY}/>
                    <animated.svg xmlns="http://www.w3.org/2000/svg" style={{left, top, transform, height, width}} viewBox={`0 0 ${cursorSVGInitialWidth} ${cursorSVGInitialHeight}`} className={stylesheetStyles.animatedCursor} ref={cursorSatelliteRef}>
                        <animated.svg x={satXNeg} ><path id="Cursor_Sat_LHS_Top" data-name="Cursor_Sat_LHS_Top" d="M4 100 L4 50 L50 4 L100 4" /></animated.svg>
                        <animated.svg x={satX} ><path id="Cursor_Sat_RHS_Top" data-name="Cursor_Sat_RHS_Top" d="M396 100 L396 50 L350 4 L300 4" /></animated.svg>
                        <animated.svg x={satX} ><path id="Cursor_Sat_RHS_Bottom" data-name="Cursor_Sat_RHS_Bottom" d="M396 300 L396 350 L350 396 L300 396"/></animated.svg>
                        <animated.svg x={satXNeg} ><path id="Cursor_Sat_LHS_Bottom" data-name="Cursor_Sat_LHS_Bottom" d="M4 300 L4 350 L50 396 L100 396"/></animated.svg>
                    </animated.svg>
                </>
                )

};

export default AnimatedCursor;


