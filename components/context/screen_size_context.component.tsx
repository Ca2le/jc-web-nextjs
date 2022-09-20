import React, { useEffect, useState } from 'react'

export const ScreenSizeContext = React.createContext<any>('')


function getSize(setDevice: any) {
    {
        if (window.innerWidth > 1600) {
            return setDevice('desktop')
        }
        if (window.innerWidth > 800 && window.innerWidth <= 1600) {
            return setDevice('laptop')
        }
        if (window.innerWidth <= 800 && window.innerWidth > 429) {
            return setDevice('tablet')
        }
        else {
            return setDevice('phone')
        }
    }
}

function ScreenSizeContextComponent(props: { children: any }) {
    
    const [device, setDevice] = useState('');

    useEffect(() => {
        getSize(setDevice)
        window.addEventListener("resize", () => getSize(setDevice))
    }, [])

    return (
        <ScreenSizeContext.Provider value={device}>
            {props.children}
        </ScreenSizeContext.Provider>
    )
}

export default ScreenSizeContextComponent

