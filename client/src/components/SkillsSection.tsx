import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from '../styles/css/skills.module.css';
import frontEndSVG from '../assets/svg/front-end.svg';
import backEndSVG from '../assets/svg/back-end.svg';
import databaseSVG from '../assets/svg/database.svg';
import easelSVG from '../assets/svg/easel.svg';
import SkillCategoryCard from './SkillCategoryCard';
import SkillCardRotating from './SkillCardRotating';
import { animated, useSprings } from 'react-spring';



 function SkillsSection() {

    const [activeSkillset, setActiveSkillset] = useState<HardSkill | null>(null);
    const [prevActiveSkillTitle, setPrevActiveSkillTitle] = useState<string | null>(null);
    const [activeSkillTitle, setActiveSkillTitle] = useState<string | null>(null);
    const skillSectionClickHandler = (skill: HardSkill) => {
        if(activeSkillTitle !== null) setPrevActiveSkillTitle(activeSkillTitle);
        setActiveSkillset(skill);
    };


    const containerRef = useRef(null);
    const [skillsContainerDims, setSkillsContainerDims] = useState<DOMRect>(null);
    

    const updateSkillTitle = () => {
        setActiveSkillTitle(() => {
            switch(activeSkillset) {
                case "frontend":
                    return "Frontend";
                case "backend":
                    return "Backend";
                case "auxiliary":
                    return "Tools";
                case "design":
                    return "Software";
                default:
                    return "Frontend";
            };
        });
    };

    useEffect(() => updateSkillTitle(), [activeSkillset]);

    

    const skillsObj = useMemo<SkillsObj[]>(() => [
        {
            iconObj:{src: frontEndSVG, alt: 'alt text'},
            title: 'frontend',
            skillsList: ["HTML5", "CSS3", "Javascript", "SCSS", "React.js", "Next.js", "php"],
            isActive: activeSkillTitle === "Frontend",
            wasActive: prevActiveSkillTitle === "Frontend",
            description: <>
                <p>When working on the frontend, I am comfortable working with the foundational languages of the web (HTML, CSS and Javcascript), in their vanilla forms. I like to work primarily with React.js and associated technologies and frameworks such as Next.js to build projects</p>
                <p>For the freelancing work that I do, I have worked with WordPress, using PHP to add dynamic content. I also work with Hubspot, using their custom Markup Language 'HUBL' to create web pages for clients</p>
                <p>I have experience working with front-end caching (see my <a href="/#portfolio?project=wordpress-template">React-Wordpress template project</a>), fetching data from different api's such as <a>Alpha Vantage</a>, <a>WordPress REST API</a>, <a>Open Maps</a>, <a>IPify</a>, <a>Stripe API</a>. Furthermore I have knowledge of Object Orientated Programming, having worked on a redumentary charting library that uses Javascript classes to paint a chart onto an HTML canvas</p>
                <p>I have experience adhering to common frontend practices such as creating responsive websites that use accessibility features like alt text, configured tab indexing and field labelling. I try to build projects with a semantic HTML structure.</p>
            </>
            /*
            description: [
                {
                    type: "paragraph",
                    children: [
                        {text: "hello world "},
                        {text: "I'm Tom", underlined: true},
                        {text: "This is the link", link: {href: '/'}},
                    ]
                }
            ]
            */
        }, {
            iconObj:{src: backEndSVG, alt: 'alt text'},
            title: 'backend',
            skillsList: ["Node.js", "Express.js", "Wordpress CMS", "MongoDB"],
            isActive: activeSkillTitle === "Backend",
            wasActive: prevActiveSkillTitle === "Backend",
            description: <>
                <p>When working on the backend, I prefer to work with Javascript frameworks such as Node.js. Having worked primarily with MERN Stack technologies, I tend to work with MongoDB as a database, primarily through MongoDB's own tools such as Compass when working locally and Atlas when working in the cloud.</p>
                <p>I have experience creating my own API's using Express.js, to carry out functions such as user authentication with JSON Web Tokens stored in cookies (see FREECYCLE REMAKE)</p>
                <p>I have worked with the WordPress CMS to create fully functional websites and built custom blocks using javascript and PHP when appropriate</p>
            </>
        }, {
            iconObj:{src: databaseSVG, alt: 'alt text'},
            title: 'auxiliary',
            skillsList: ["Webpack", "Babel", "Typescript", "Jest"],
            isActive: activeSkillTitle === "Tools",
            wasActive: prevActiveSkillTitle === "Tools",
            description: <>
                <p>I have incorporated build tools and auxiliary tools into my projects to better understand the process of creating web applications without cli commands such as 'create-react-app'</p>
                <p>I am able to work with Webpack, Babel and Typescript to configure custom compilation and transpilation pipelines to bundle my code to work with web browsers</p>
                <p>I have used Jest to carry out unit testing in multiple projects (DIV DATA, KETO)</p>
            </>
        }, {
            iconObj:{src: easelSVG, alt: 'alt text'},
            title: 'design',
            skillsList: ["AdobeXD", "GIMP", "XMind", "Inkscape"],
            isActive: activeSkillTitle === "Software",
            wasActive: prevActiveSkillTitle === "Software",
            description: <>
                <p>I have incorporated a number of design tools into my work pipeline, which allow me to organise projects more effectively and create custom assets for use.</p>
                <p>I am familiar with design software such as 'AdobeXD', which I often use to view client designs and wireframe/prototype my own designs before committing to build them</p>
                <p>I am also comfortable using asset creation software such as 'GNU Image Manipulation Program (GIMP)' and 'Inkscape', to create and edit assets for use on webpages</p>
                <p>I also use the mind mapping software 'XMind' to plan projects, create sitemaps for websites and any other mind mapping requirements</p>
            </>
        }, 
    ], [activeSkillTitle, prevActiveSkillTitle]);

    const [activeSkillIdx, setActiveSkillIdx] = useState<number>(0);
    const [skillCardRects, setSkillCardRects] = useState<DOMRect[]>(null);

    useEffect(() => {
        const index = skillsObj.findIndex(skillObj => skillObj.title === activeSkillset)
        if(index < 0) return
        setActiveSkillIdx(index);
    }, [activeSkillset, skillsObj, activeSkillTitle])

    const measureContainer = () => {
        if(!containerRef || !containerRef.current) return;
        const element = containerRef.current as Element;
        setSkillsContainerDims(element.getBoundingClientRect());
        const children = Array.from(element.children);
        setSkillCardRects(children.map(child => child.getBoundingClientRect()));
    };

    useEffect(() => {
        // measureContainer()
        window.addEventListener("resize", () => measureContainer());
    }, []);
    
    
    
    /*
    const renderElement = useCallback((object: SerializedData) => {
        const inlineChildren = object.children.map(inlineChild => {
            const {text, bold, underlined, link} = inlineChild;
            const withLink = (text: string) => {
                const {href,} = link;
                return <a href={href}>{text}</a>
            };

            const renderText = () => {
                if(link) return withLink(text);
                return text
            };

            return (
                <span 
                    style={{
                        fontWeight: bold? 'bold' : 'normal', 
                        textDecoration: underlined ? 'underline' : 'initial',
                    }}
                >
                    {renderText()}
                </span>);
            });
        switch(object.type) {
            case "paragraph":
                return <p>{inlineChildren}</p>;
        };
    }, []);
    */
    const skillCards = useMemo<JSX.Element[]>(() => {
        return skillsObj.map(({iconObj, title, skillsList, isActive, wasActive}) => (
            <SkillCardRotating 
                key={title}
                skillSectionClickHandler={skillSectionClickHandler}
                icon={iconObj} 
                title={title} 
                skillsList={skillsList} 
                isActive={isActive}  
                wasActive={wasActive}  
                />
    ));
    }, [skillsObj]);

    const skillCardWZeroWidths = skillCardRects !== null ? skillCardRects.filter(card => !card.width).length : null;

    useEffect(() => {
        
        // if(skillCardRects === null || skillCardRects.filter(card => !card.width).length) {
            measureContainer();
        // }
    }, [containerRef, skillCards, skillCardWZeroWidths, activeSkillIdx])


    const mod = (num: number, addNum: number, max: number = skillCards.length - 1) => {
        const target = num + addNum;
        return target > max ? target - (max + 1)  : target;
    };

    
    const [springs, api] = useSprings(skillCards.length, index => {
        if(skillsContainerDims=== null || skillCardRects === null) return
        const {width, height} = skillsContainerDims;
        
            const findPositions = (idx: number) => {
                const activeIdx = skillsObj.findIndex(obj => obj.isActive);
                const rightIdx = mod(activeIdx, 1);
                const bottomIdx = mod(activeIdx, 2);
                const leftIdx = mod(activeIdx, 3);
                // if(idx === activeIdx) console.log(`x: ${width/2 - skillCardRects[activeIdx].width/2} container: ${width/2}; child: ${skillCardRects[activeIdx].width/2}`)

                switch(idx){
                    case activeIdx: return {x: width/2 - skillCardRects[activeIdx].width/2, y: 0};
                    case rightIdx: return {x: width - skillCardRects[rightIdx].width, y: height/2 - skillCardRects[rightIdx].height/2};
                    case bottomIdx: return {x: width/2 - skillCardRects[bottomIdx].width/2, y: height - skillCardRects[bottomIdx].height};
                    case leftIdx: return {x: 0, y: height/2 - skillCardRects[leftIdx].height/2};
                    default: return {x: 0, y: 0};
                }
            };
            const {x, y} = findPositions(index);

            return {
                opacity: 1,
                transform: `translate(${x}px, ${y}px) rotateZ(${0}deg) `,
            };
    });

    

    useEffect(() => {
        if(skillsContainerDims=== null || skillCardRects === null) return
        const mod = (num: number, addNum: number, max: number = skillCards.length - 1) => {
            const target = num + addNum;
            return target > max ? target - (max + 1)  : target;
        };
        const {width, height} = skillsContainerDims;
        const paddingX_px = 16;
        const paddingY_px = 16;
        
        api.start(index => {
            const findPositions = (idx: number) => {
                // const activeIdx = skillsObj.findIndex(obj => obj.isActive);
                const rightIdx = mod(activeSkillIdx, 1);
                const bottomIdx = mod(activeSkillIdx, 2);
                const leftIdx = mod(activeSkillIdx, 3);
                // if(idx === activeSkillIdx) console.log(`x: ${width/2 - skillCardRects[activeSkillIdx].width/2} container: ${width/2}; child: ${skillCardRects[activeSkillIdx].width/2}`)

                switch(idx){
                    case activeSkillIdx: return {x: width/2 - skillCardRects[activeSkillIdx].width/2, y: paddingY_px};
                    case rightIdx: return {x: width - skillCardRects[rightIdx].width - paddingX_px, y: height/2 - skillCardRects[rightIdx].height/2};
                    case bottomIdx: return {x: width/2 - skillCardRects[bottomIdx].width/2, y: height - skillCardRects[bottomIdx].height - paddingY_px};
                    case leftIdx: return {x: paddingX_px, y: height/2 - skillCardRects[leftIdx].height/2};
                    default: return {x: 0, y: 0};
                }
            };
            const {x, y} = findPositions(index);

            return {
                opacity: 1,
                transform: `translate(${x}px, ${y}px) rotateZ(${0}deg) `,
                
            };
        });
    }, [skillsObj, skillsContainerDims?.height, skillCards.length, api, skillCardRects]);

    return(
        <section id="skills">
            <h1 className={styles.sectionTitle}>My Skills</h1>
            <div className={styles.skillsContainer}>
                <div className={styles.titleSection}>
                    <h3>// {activeSkillTitle ? activeSkillTitle.toUpperCase() : "Skills"}</h3>
                    <div className={`${styles.skillDescription} `}>
                        {skillsObj.length ? skillsObj[activeSkillIdx].description: <></>}
                    </div>
                </div>
                <div className={styles.skillCardsContainer} ref={containerRef}>
                    {   
                        springs.map((springStyles, idx) => (
                            <animated.div key={idx} style={{...springStyles, position: 'absolute'}}>
                                {skillCards[idx]}
                            </animated.div>
                        ))
                    }
                </div> 
            </div>
        </section>
    );
 };

 export default SkillsSection;