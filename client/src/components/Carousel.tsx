import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import styles from '../styles/css/portfolio.module.css';
import ProjectCard from './ProjectCard';
import ProjectData from '../utils/projectData';
import { animated, config, useSprings, } from 'react-spring';
import { GlobalCtx } from '../contexts/GlobalCtx';
import useBreakpoint from '../hooks/useBreakpoint';
import { useDrag } from '@use-gesture/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface Props {};

function Carousel(props: Props) {
    const {} = props;
    
    const containerRef = useRef(null);
    const {queryMatch: mediaBreakpoints} = useBreakpoint();
    const isMobileMode = !mediaBreakpoints.sm;
    
    const measureContainer = () => {
        if(!containerRef || !containerRef.current) return;
        const element = containerRef.current as Element;
        const elementRect = element.getBoundingClientRect();
        setContainerDims(elementRect);
        setCardWidth((elementRect.width - revealedIdxs.length * gapX_px) / (isMobileMode ? 1.25 : 3));
    };
    
    useEffect(() => {
        window.addEventListener("resize", () => measureContainer());
    }, []);
    
    useEffect(() => {
        measureContainer();
    }, [containerRef]);

    
    const {selectedProjectIdx, updateSelectedIdx} = useContext(GlobalCtx);
    const [revealedIdxs, setRevealedIdxs] = useState<number[]>([0,1]);
    const [containerDims, setContainerDims] = useState<DOMRect>(null);
    const [cardWidth, setCardWidth] = useState<number>(null);
    const gapX_px = 16;
    
    const projectCards = useMemo(() => ProjectData.map((projectObj, idx) => {
        if(!containerDims || cardWidth === null) return <></>;
        const {accessor, title, cardContent, thumbnailImgs} = projectObj;
        return <ProjectCard 
            key={`${accessor}_project_card`}
            accessor={accessor}
            title = {title}
            thumbnailImgs = {thumbnailImgs}
            content = {cardContent}
            isActive = {selectedProjectIdx === idx}
            cardWidth = {cardWidth}
        />
    }), [revealedIdxs, selectedProjectIdx, containerDims, cardWidth]);

    const mod = (num: number, offsetNum: number, max: number = projectCards.length - 1, min: number = 0) => {
        const target = num + offsetNum;
        if(offsetNum < 0) return target < min ? max - (target - min + 1) : target
        return target > max ? target - (max + 1)  : target;
    };

    function clampArryLength<Type>(arrayIn: Type[], value: Type, max: number = 3, min: number = 2): number[]{
        const valueIdx = arrayIn.findIndex(item => item === value);
        const endIdx = arrayIn.length - 1;
        let slicedArry = [];
        if(valueIdx + min < max) {
            slicedArry = arrayIn.slice(0, min + valueIdx);
        }
        else if(valueIdx > endIdx - min + 1) {
            slicedArry = arrayIn.slice(valueIdx - min + 1, endIdx+1);
        }
        else {
            slicedArry = arrayIn.slice(valueIdx - Math.floor(max / 2), valueIdx - Math.floor(max / 2) + max);
        };
        const returnArry = slicedArry.map(obj => arrayIn.indexOf(obj))
        return returnArry;
    };

    useEffect(() => {
        setRevealedIdxs(clampArryLength<projectData>(ProjectData, ProjectData[selectedProjectIdx], isMobileMode ? 2 : 3))
    }, [selectedProjectIdx]);

    const [springs, api] = useSprings(ProjectData.length, index => {
        const xPos = cardWidth / 2 + (index * cardWidth);
        return {
            to: {transform: `translate(${xPos}px, 0)`},

        };
    });

    useEffect(() => {
        if(!cardWidth) return;
        const getXPos = (idx: number): number => {
            const centreDatum = containerDims.width /2 - cardWidth / 2
            const idxDiff = idx - selectedProjectIdx;
            if(idxDiff < 0) return centreDatum - (cardWidth + gapX_px) * Math.abs(idxDiff);
            if(idxDiff > 0) return centreDatum + (cardWidth + gapX_px) * Math.abs(idxDiff);
            if(idx === selectedProjectIdx) return containerDims.width /2 - cardWidth / 2;
            return 0;
        }; 

        api.start(index => {
            const xPos = getXPos(index);
            return {
                to: {transform: `translate(${xPos}px, 0)`},
            }
        })
    }, [cardWidth, revealedIdxs]);

    const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);
    const clampMin = (num: number, min: number) => Math.max(num, min);
    const clampMax = (num: number, max: number) => Math.min(num, max);

    const clickHandler = (config: 'increment' | 'decrement') => {
        const incrementWithClamp = () => {
            updateSelectedIdx(clampMax(selectedProjectIdx + 1, ProjectData.length - 1))
        };
        const decrementWithClamp = () => {
            updateSelectedIdx(clampMin(selectedProjectIdx - 1, 0))
        };

        if(config === 'increment') incrementWithClamp();
        else if(config === 'decrement') decrementWithClamp();
    }

    const bind = useDrag(({ args: idx, down, movement: [mx, my], initial: [x0] }) => {
        if(down) console.log(`down: ${down}, ${x0 + mx}`)
        api.start({ transform: `translate(${down ? x0 + mx : 0}, 0` })
      }, {})

    const springEls = useMemo(() => {
        return springs.map((styles, idx) => {
            return (
                <animated.div key={idx} style={{...styles, position: 'absolute', width: cardWidth, maxWidth: 500}} /*{...bind(idx)}*/ >
                    <div style={{position: 'relative'}}>
                        {projectCards[idx]}
                    </div>
                </animated.div>
            )
            }
        )
    }, [springs, projectCards]);

    

    return (
        <>
            <div className={styles.projectCardsContainer} ref={containerRef} style={{overflowX: 'hidden'}}>
                {springEls}
            </div>
            <div className={`${styles.carouselBtnContainer} `}>
                <button onClick={() => clickHandler('decrement')} style={{display: selectedProjectIdx === 0 ? "none" : "initial"}}><FontAwesomeIcon icon={["fas", "chevron-left"]} size="2x"/></button>
                <button onClick={() => clickHandler('increment')} style={{display: selectedProjectIdx === ProjectData.length -1 ? "none" : "initial"}}><FontAwesomeIcon icon={["fas", "chevron-right"]} size="2x"/></button>
            </div>
        </>
    )

};

export default Carousel;
