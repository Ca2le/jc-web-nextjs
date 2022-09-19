import React, { useContext } from 'react'

import * as CL from '../../components.libary'
import { LangageContext } from '../../context/langage_context.component'
import { LinkContainer } from './nav_links.styled'


function NavLinks() {
    const { state_langange } = useContext(LangageContext)

    return (
        <LinkContainer>
            <CL.Link value={`${state_langange.nav_contact}`} route={`/${state_langange.nav_contact}`} />
            <CL.Link value={`${state_langange.nav_services}`} route={`/${state_langange.nav_services}`} />
            <CL.Link value={`${state_langange.nav_developers}`} route={`/${state_langange.nav_developers}`} />
        </LinkContainer>
    )
}

export default NavLinks