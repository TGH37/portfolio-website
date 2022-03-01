import React, { ReactElement, RefObject, useContext, useEffect, useRef, useState } from 'react';
import stylesheetStyles from '../styles/css/misc.module.css';
import useMousePosition from "../hooks/useMousePosition";
import { useSpring, animated, useSpringRef, Spring, useChain, useSprings, AnimatedComponent, WithAnimated } from 'react-spring'
import { CursorCtx } from '../contexts/CursorCtx';
import CustomCursor from './CustomCursor'
import CircleCursor from './CircleCursor';
import { ElementType } from '@react-spring/types';

interface Props {
};





function AnimatedCursor(props: Props) {
    const { } = props;
    const { clientX, clientY } = useMousePosition();
    const [,,hoverElement] = useContext(CursorCtx);
    const setAllRectKeys = (value: number): VerboseRect => ({left: value, right: value, top: value, bottom: value, width: value, height: value});

    const [cursorSatelliteCoords, setCursorSatelliteCoords] = useState<VerboseRect>(setAllRectKeys(0));

    const el = hoverElement ? hoverElement as HTMLElement : null;
    const boxPosX = hoverElement ? cursorSatelliteCoords.left : clientX;
    const boxPosY = hoverElement ? cursorSatelliteCoords.top : clientY;
    const cursorSatelliteRef = useRef(null);
    const cursorRef = useRef<SVGSVGElement | null>(null);

    // const {left, top, transform} = useSpring({
    //     to: {left: boxPosX, top: boxPosY, transform: "translate(-25%, -50%)"},
    //     reset: false,
    //     config: {
    //         precision: 1
    //     },
    // })

    // const {height} = useSpring({height: "50px"});
    // const {width} = useSpring({width: "50px"});


    // const calcDims = (config: "width" | "height"): string => {
    //     if(hoverElement !== null) return `${config === "width" ? cursorSatelliteCoords.width : cursorSatelliteCoords.height}px`;
    //     const cursorEl = cursorRef.current as SVGElement
    //     // const cursorEl = cursorSatelliteRef.current as SVGElement
    //     // const distanceVect2D = Math.sqrt(Math.pow(Math.abs(boxPosX - cursorEl.getBoundingClientRect().left),2) + Math.pow(Math.abs(boxPosY - cursorEl.getBoundingClientRect().top),2));
    //     const minValue = 20;
    //     const range = 100;
    //     const distanceVect2D = Math.sqrt(Math.pow(Math.abs(boxPosX - cursorEl.getBoundingClientRect().left),2) + Math.pow(Math.abs(boxPosY - cursorEl.getBoundingClientRect().top),2));
    //     return `${minValue + (distanceVect2D/1000) * range}px`
    // }
    
    // const getTranslate = () => {
    //     return hoverElement === null ? "translate(-2vw, -50%)" : "translate(0%, 0%)";

    // }
    // const {x: satX} = useSpring({x: 0, reset: false, config:{duration: 200}});
    // const {x: satXNeg} = useSpring({x: 0, reset: false, config:{duration: 200}});
    // const {y: satY} = useSpring({y: 0, reset: false, config:{duration: 200}});
    // const {y: satYNeg} = useSpring({y: 0, reset: false, config:{duration: 200}});

    // const cursorSVGInitialWidth = 400;
    // const cursorSVGInitialHeight = 400;


    // const getCursorWidth = () => {
    //     if(el === null) return 0;
    //     const elementAspectRatio = cursorSatelliteCoords.width / cursorSatelliteCoords.height;
    //     return (elementAspectRatio - 1) / 2 // starting AR === 1, so increase in AR === newAR - 1, then half as origin is in the middle
    // }
    // const getCursorHeight = () => el === null ? 0 : cursorSatelliteCoords.height;
    
    // useEffect(() => {
    //     left.start({to: boxPosX})
    //     top.start({to: boxPosY})
    //     transform.start({to: getTranslate()})
    //     height.start(
    //         {
    //             to: calcDims("height"),
    //             config: {
    //                 duration: 200,
                    
    //             }
    //         }
    //     );
    //     width.start(
    //         {
    //             to: calcDims("width"),
    //             config: {
    //                 duration: 200,
    //             }
    //         }
    //     );

    //     satX.start({to: cursorSVGInitialWidth * getCursorWidth()})
    //     satXNeg.start({to: -cursorSVGInitialWidth * getCursorWidth()})
    //     satY.start({to: cursorSVGInitialHeight * getCursorHeight()})
    //     satYNeg.start({to: -cursorSVGInitialHeight * getCursorHeight()})
    // })


        // useEffect(() => {
        //     console.log("Rendered: useEffect[el]")
        //     if(el === null) {
        //         setCursorSatelliteCoords(setAllRectKeys(0));
        //         return;
        //     };
        //     const paddingX = 10, paddingY = 5;

        //     setCursorSatelliteCoords({
        //         left: el.getBoundingClientRect().left - paddingX,
        //         top: el.getBoundingClientRect().top,
        //         width: el.getBoundingClientRect().width + 2 * paddingX,
        //         height: el.getBoundingClientRect().height,
        //         right: el.getBoundingClientRect().left + el.getBoundingClientRect().width + 2 * paddingX,
        //         bottom: el.getBoundingClientRect().top + el.getBoundingClientRect().height,
        //     })
        // }, [el])

        
        const foo = [1, 2, 3, 4]


        
        const getCursorCoords = idx => {
            if(!cursorRef.current) return {};
            const h = 10;
            const w = 10;
            
            const cursorEl = cursorRef.current as SVGElement;
            const cursorSatelliteEl = cursorSatelliteRef.current as HTMLDivElement;

            const cursorRect = {left: boxPosX, top: boxPosY, width: cursorEl.getBoundingClientRect().width, height: cursorEl.getBoundingClientRect().height};
            
            const distanceVect2D = Math.sqrt(Math.pow(Math.abs(boxPosX - cursorSatelliteEl.getBoundingClientRect().left),2) + Math.pow(Math.abs(boxPosY - cursorSatelliteEl.getBoundingClientRect().top),2));

            const left =  idx === 0 || idx === 3 ? (cursorRect.left - cursorRect.width / 2) - (2 * w) : (cursorRect.left + cursorRect.width / 2) +  w;
            const top = idx === 0 || idx === 1 ? (cursorRect.top - cursorRect.height / 2) - (2 * h) : (cursorRect.top + cursorRect.height / 2) +  h;
            const rotate = idx * 90;

            return (
                {
                    left,
                    top,
                    // position:"fixed",
                    transform: `rotateZ(${rotate}deg)`,
                    height: `${h}px`,
                    width: `${w}px`,
                }
                );
            };

        const calcPythagorasDist = (xDist, yDist) => Math.sqrt(Math.pow(Math.abs(xDist), 2) + Math.pow(Math.abs(yDist), 2));

            const [isCursorMoving, setIsCursorMoving] = useState<boolean>(false)
        const [satelliteCoords, setSatelliteCoords] = useState<{left: number, top: number}>({left: 0, top: 0});
        const [satelliteElementWidth, setSatelliteElementWidth] = useState<number>(10);
        const [satelliteElementHeight, setSatelliteElementHeight] = useState<number>(10);
        const [satToCursorDistVect2D, setSatToCursorDistVect2D] = useState<number>(0)
        const [satTargetWidth, setSatTargetWidth] = useState<number>(20);

        const updateCursorMoving = (isCursorMoving: boolean) => setIsCursorMoving(isCursorMoving);
        const calcSatElTargetWidth = () => {
            if(!cursorSatelliteRef.current) return;
            const cursorSatelliteEl = cursorSatelliteRef.current as HTMLDivElement;
            const distanceVect2D = calcPythagorasDist(boxPosX - cursorSatelliteEl.getBoundingClientRect().left, boxPosY - cursorSatelliteEl.getBoundingClientRect().top);
            const minValue = 20;
            const range = 100;
            const targetWidth = minValue + (distanceVect2D / 1000) * range;
            setSatTargetWidth(targetWidth);
            return targetWidth;
        }

        const set_targetCoords = (idx, targetWidth: number = 20) => {
            if(!cursorRef.current) return {};

            const cursorEl = cursorRef.current as SVGElement;

            const cursorRect = {left: boxPosX, top: boxPosY, width: cursorEl.getBoundingClientRect().width, height: cursorEl.getBoundingClientRect().height};
            
            const left =  idx === 0 || idx === 3 ? satelliteCoords.left : satelliteCoords.left + targetWidth - satelliteElementWidth;
            const top = idx === 0 || idx === 1 ? satelliteCoords.top : satelliteCoords.top + targetWidth - satelliteElementHeight;
            // const left =  idx === 0 || idx === 3 ? satelliteCoords.left : satelliteCoords.left + 3 * satelliteElementWidth;
            // const top = idx === 0 || idx === 1 ? satelliteCoords.top : satelliteCoords.top + 3 * satelliteElementHeight;
            // const left =  idx === 0 || idx === 3 ? (cursorRect.left - cursorRect.width / 2) - (2 * satelliteElementWidth) : (cursorRect.left + cursorRect.width / 2) +  satelliteElementWidth;
            // const top = idx === 0 || idx === 1 ? (cursorRect.top - cursorRect.height / 2) - (2 * satelliteElementHeight) : (cursorRect.top + cursorRect.height / 2) +  satelliteElementHeight;
            const rotate = idx * 90;

            return (
                    {
                        to: {
                            left,
                            top,
                            transform: `rotateZ(${rotate}deg)`,
                            width: `${satelliteElementWidth}px`,
                            height: `${satelliteElementHeight}px`,
                        },
                    }
                );
            };

            
            
            const getSatelliteOrigin = (targetWidth: number) => {
                if(!cursorSatelliteRef.current) return {left: 0, top: 0};
                const cursorEl = cursorRef.current as SVGElement;
                const satelliteElementCoords = { left: (boxPosX) - (targetWidth / 2), top: (boxPosY) - (targetWidth / 2)};
                setSatelliteCoords(satelliteElementCoords);
                return satelliteElementCoords;
            }
            
        const [springs, api] = useSprings(foo.length, idx => getCursorCoords(idx));

        const {left: satLeft, top: satTop} = useSpring({to: {left: boxPosX, top: boxPosY}});

        useEffect(() => {
            if(!cursorSatelliteRef.current || !cursorRef.current) return;
            const targetWidth = calcSatElTargetWidth();
            const satElOriginCoords = getSatelliteOrigin(targetWidth);
            satLeft.start({to: satElOriginCoords.left});
            satTop.start({to: satElOriginCoords.top});
            api.start(idx => set_targetCoords(idx, targetWidth));
        }, [clientX, clientY])


        
        // const springs = useSprings(foo.length, foo.map((item, idx) => {
        // }));        
        
    return (
    
                <>
                    <animated.div ref={cursorSatelliteRef} style={{left: satLeft, top: satTop, position: "fixed"}}>
                        {springs.map((styles, idx) => <animated.svg key={idx} style={{...styles, position: "fixed"}} viewBox="0 0 100 100" fill={"#cecece"}><path d="M0 100 L0 50 L50 0 L100 0"/></animated.svg>)}
                    </animated.div>
                        {/* <animated.svg x={satXNeg} style={{left, top, transform, width, height, position:"fixed"}} viewBox="0 0 100 100" fill={"#cecece"}><path d="M4 100 L4 50 L50 4 L100 4"/></animated.svg>
                        <animated.svg x={satX} style={{left, top, transform}}><path d="M396 100 L396 50 L350 4 L300 4" /></animated.svg>
                        <animated.svg x={satX} style={{left, top, transform}}><path d="M396 300 L396 350 L350 396 L300 396"/></animated.svg>
                        <animated.svg x={satXNeg} style={{left, top, transform}}><path d="M4 300 L4 350 L50 396 L100 396"/></animated.svg> */}
                    <CircleCursor x={clientX} y={clientY} ref={cursorRef} />
                    {/* <animated.svg xmlns="http://www.w3.org/2000/svg" style={{left, top, transform, height, width}} viewBox={`0 0 ${cursorSVGInitialWidth} ${cursorSVGInitialHeight}`} className={stylesheetStyles.animatedCursor} ref={cursorSatelliteRef}>
                        <animated.svg x={satXNeg} ><path id="Cursor_Sat_LHS_Top" data-name="Cursor_Sat_LHS_Top" d="M4 100 L4 50 L50 4 L100 4" /></animated.svg>
                        <animated.svg x={satX} ><path id="Cursor_Sat_RHS_Top" data-name="Cursor_Sat_RHS_Top" d="M396 100 L396 50 L350 4 L300 4" /></animated.svg>
                        <animated.svg x={satX} ><path id="Cursor_Sat_RHS_Bottom" data-name="Cursor_Sat_RHS_Bottom" d="M396 300 L396 350 L350 396 L300 396"/></animated.svg>
                        <animated.svg x={satXNeg} ><path id="Cursor_Sat_LHS_Bottom" data-name="Cursor_Sat_LHS_Bottom" d="M4 300 L4 350 L50 396 L100 396"/></animated.svg>
                    </animated.svg> */}
                </>
                )

};

export default AnimatedCursor;


