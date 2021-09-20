import React from 'react'
import styles from '../styles/css/misc.module.css';

interface Props {}

function CustomCursor(props: Props) {
    const {} = props
    const height = 100;
    const width = 200;

    const bracketHeight = height / 5, bracketWidth = width /5, bracketStrokeWidth = Math.floor(Math.max(bracketHeight, bracketWidth) / 20);
    const bracketChamferOffset = Math.min(bracketWidth, bracketHeight) / 2;

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" strokeWidth={bracketStrokeWidth} className={styles.cursorAlt}>
                    <path d={`M${Math.ceil(bracketStrokeWidth / 2)} ${bracketHeight} L${Math.ceil(bracketStrokeWidth / 2)} ${bracketChamferOffset} L${bracketChamferOffset} ${Math.ceil(bracketStrokeWidth / 2)} L${bracketWidth} ${Math.ceil(bracketStrokeWidth / 2)}`}/>
                    {/* <path d={`M${width - Math.ceil(bracketStrokeWidth / 2)} ${bracketHeight} L${width - Math.ceil(bracketStrokeWidth / 2)} ${bracketChamferOffset} L${width - bracketChamferOffset} ${Math.ceil(bracketStrokeWidth / 2)} L${width - bracketWidth} ${Math.ceil(bracketStrokeWidth / 2)}`}/> */}
                    <path d={`M${width - Math.ceil(bracketStrokeWidth / 2)} ${height - bracketHeight} L${width - Math.ceil(bracketStrokeWidth / 2)} ${height - bracketChamferOffset} L${width - bracketChamferOffset} ${height - Math.ceil(bracketStrokeWidth / 2)} L${width - bracketWidth} ${height - Math.ceil(bracketStrokeWidth / 2)}`}/>
                    {/* <path d={`M${Math.ceil(bracketStrokeWidth / 2)} ${height - bracketHeight} L${Math.ceil(bracketStrokeWidth / 2)} ${height - bracketChamferOffset} L${bracketChamferOffset} ${height - Math.ceil(bracketStrokeWidth / 2)} L${bracketWidth} ${height - Math.ceil(bracketStrokeWidth / 2)}`}/> */}
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" strokeWidth={bracketStrokeWidth} className={styles.cursorAlt}>
                    <path d={`M1 25 L1 12.5 L12.5 0 L50 0`}/>
                    <path d={`M199 25 L199 12.5 L186.5 0 L150 0`}/>
                    {/* <path d={`M${width - Math.ceil(bracketStrokeWidth / 2)} ${bracketHeight} L${width - Math.ceil(bracketStrokeWidth / 2)} ${bracketChamferOffset} L${width - bracketChamferOffset} ${Math.ceil(bracketStrokeWidth / 2)} L${width - bracketWidth} ${Math.ceil(bracketStrokeWidth / 2)}`}/> */}
                    <path d={`M${width - Math.ceil(bracketStrokeWidth / 2)} ${height - bracketHeight} L${width - Math.ceil(bracketStrokeWidth / 2)} ${height - bracketChamferOffset} L${width - bracketChamferOffset} ${height - Math.ceil(bracketStrokeWidth / 2)} L${width - bracketWidth} ${height - Math.ceil(bracketStrokeWidth / 2)}`}/>
                    <path d={`M${Math.ceil(bracketStrokeWidth / 2)} ${height - bracketHeight} L${Math.ceil(bracketStrokeWidth / 2)} ${height - bracketChamferOffset} L${bracketChamferOffset} ${height - Math.ceil(bracketStrokeWidth / 2)} L${bracketWidth} ${height - Math.ceil(bracketStrokeWidth / 2)}`}/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="130" height="59" viewBox="0 0 15 15">
                <circle cx="7.5" cy="7.5" r="7.5"/>
            </svg>
        </>
    )
}

export default CustomCursor
