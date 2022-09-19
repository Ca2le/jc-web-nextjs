import React, { useEffect, useState } from 'react'

function getSize() {
    if (typeof window !== "undefined") {
        if (window.innerWidth > 1600) return 'desktop'
        if (window.innerWidth > 800 && window.innerWidth <= 1600) return 'laptop'
        if (window.innerWidth <= 800 && window.innerWidth > 429) return 'tablet'
        else return 'phone'
    } else return undefined
}

const initialState = getSize()
export const ScreenSizeContext = React.createContext(initialState)

function ScreenSizeContextComponent(props: { children: React.ReactNode }) {

    const [device, setDevice] = useState(getSize);

    function handleResize() {
        const device = getSize()
        if (device == 'desktop') {
            setDevice('desktop')
        }
        if (device == 'laptop') {
            setDevice('laptop')
        }
        if (device == 'tablet') {
            setDevice('tablet')
        }
        if (device == 'phone') {
            setDevice('phone')
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, [])

    return (
        <ScreenSizeContext.Provider value={device}>
            {props.children}
        </ScreenSizeContext.Provider>
    )
}

export default ScreenSizeContextComponent

