import React, { useEffect, useState } from 'react'

export const ScreenSizeContext = React.createContext<any>('')


function getSize(setDevice: React.Dispatch<React.SetStateAction<string>>) {
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

interface ScreenSizeContextComponentProps {
    children: React.ReactNode
}

function ScreenSizeContextComponent({ children } : ScreenSizeContextComponentProps) {
    
    const [device, setDevice] = useState('');

    useEffect(() => {
        getSize(setDevice)
        console.log(window.scrollY)
        window.addEventListener("resize", () => getSize(setDevice))
    }, [])
    console.log(device)
    return (
        <ScreenSizeContext.Provider value={device}>
            {children}
        </ScreenSizeContext.Provider>
    )
}

export default ScreenSizeContextComponent

