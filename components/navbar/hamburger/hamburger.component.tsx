import React, { useContext, useState } from 'react'
import * as CL from '../../components.libary'
import NavLinks from '../nav_links/nav_links.component'
import { Cheeze, Hamburger } from './hamburger.styled'



function HamburgerComponent() {
    const {state, setState} = useContext(CL.HamburgerToggleContext)
    const device= useContext(CL.ScreenSizeContext)
    if(device === 'laptop' ||device === 'desktop') {
        return <></>
    } else {
        return (
            <Hamburger onClick={ () => setState(!state)}>
            <h1>{state ? '🐹' : '🐶'}</h1>
        </Hamburger>
        )
    }
}


export default HamburgerComponent