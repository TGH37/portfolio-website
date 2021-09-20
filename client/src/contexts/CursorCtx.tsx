import React, { createContext, useState } from 'react'

interface Props {
    children: any
}

export const CursorCtx = createContext([])

function CursorProvider(props: Props) {
    const {
        children
    } = props

    const [isHoverActive, setIsHoverActive] = useState<boolean>(false);
    const [hoverElement, setHoverElement] = useState<HTMLElement | null>(null);
    

    return (
        <CursorCtx.Provider value={
            [
                isHoverActive, 
                setIsHoverActive,
                hoverElement,
                setHoverElement
            ]
        }>
            { children }
        </CursorCtx.Provider>
    )
}

export default CursorProvider
