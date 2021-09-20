import React, { createContext, useState } from 'react'

interface Props {
    children: any
}

export const GlobalCtx = createContext({})

function GlobalProvider(props: Props) {
    const {
        children
    } = props


    return (
        <GlobalCtx.Provider value={
            {
                
            }
        }>
            { children }
        </GlobalCtx.Provider>
    )
}

export default GlobalProvider
