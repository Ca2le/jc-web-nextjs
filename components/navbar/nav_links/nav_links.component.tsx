import React, { useContext, useState } from 'react'
import * as CL from '../../components.libary'

import { LinkContainer } from './nav_links.styled'


function NavLinks() {
    const { state } = useContext(CL.HamburgerToggleContext)
    const { state_langange } = useContext(CL.LangageContext)
    const device = useContext(CL.ScreenSizeContext)

    if ( (device === 'laptop' || device === 'desktop') || ((device === 'phone' || device === 'tablet') && state )) {
        return (
            <LinkContainer toggle={state}>
                <CL.Link value={`${state_langange.nav_services}`} route={`/${state_langange.nav_services.toLowerCase()}`} />
                <CL.Link value={`${state_langange.nav_showroom}`} route={`/${state_langange.nav_showroom.toLowerCase()}`} />
                <CL.Link value={`${state_langange.nav_developers}`} route={`/${state_langange.nav_developers.toLowerCase()}`} />
                <CL.Link value={`${state_langange.nav_contact}`} route={`/${state_langange.nav_contact.toLowerCase()}`} />
            </LinkContainer>)
    } else {
        return (
            <></>
        )
    }
}

export default NavLinks