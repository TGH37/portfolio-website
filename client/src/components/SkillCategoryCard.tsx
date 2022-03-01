import React, { CSSProperties, useMemo } from 'react';
import styles from '../styles/css/skills.module.css';

interface Props {
    skillSectionClickHandler: Function
    icon: {src: string, alt: string}
    title: string
    skillsList: string[]
    isActive: boolean
    cardIdx: number
};

function SkillCategoryCard(props: Props) {
    const {
        skillSectionClickHandler,
        icon,
        title,
        skillsList,
        isActive,
        cardIdx
    } = props;

    type CardConfig = "top-left" | "top-right" | "bottom-left" | "bottom-right";

    const borderMap: Map<CardConfig, string[]> = new Map([
        ["top-left", ["Bottom", "Right"]],
        ["top-right", ["Bottom", "Left"]],
        ["bottom-left", ["Top", "Right"]],
        ["bottom-right", ["Top", "Left"]],
    ]);

    let cardPosition: CardConfig | null = null;

    switch(cardIdx) {
        case(0):
            cardPosition = "top-left";
            break;
        case(1):
            cardPosition = "top-right";
            break;
        case(2):
            cardPosition = "bottom-left";
            break;
        case(3):
            cardPosition = "bottom-right";
            break;
        default:
            return null
    };

    const getCardStyle = (): CSSProperties => {
        if(cardPosition === null || isActive) return {};
        const borderSettings = `1px solid #cecece`;
        const borderArry = borderMap.get(cardPosition);
        const borderKeys = borderArry.map(border => `border${border}`);
        const styleObj = borderKeys.reduce((tot, curr)=> (tot[curr]=borderSettings, tot), {borderRadius: 0});
        return styleObj;
    };

    const skills = skillsList.map(skill => <li key={skill}>{skill}</li>);

    return (
        <div className={`${styles.skillCategoryCard} ${isActive ? styles.activeSkillsCard : ""}`} onClick={() => skillSectionClickHandler(title)} style={getCardStyle()}>
            <img src={icon.src} alt={icon.alt} className={styles.skillCategoryBgImg} loading="lazy"/>
            <ul className={styles.skillsList}>
                {skills}
            </ul>
        </div>
    );
};

export default SkillCategoryCard;
