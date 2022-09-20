import React, { FC, ReactElement, useContext, useEffect, useState } from 'react'
import theme from '../../global/styles/theme'
import * as CL from '../components.libary'
import { Nav_Div, Nav_Wrapper } from './navbar.styled'



function Navbar(): ReactElement {



  const { state } = useContext(CL.HamburgerToggleContext)
  const device = useContext(CL.ScreenSizeContext)
  return (
    <Nav_Div toggle={state} device={device}>
      <Nav_Wrapper>
        <CL.Logo height='100' width='100' color={state ? theme.hexcolors.mint : theme.hexcolors.dark } />
        <CL.NavLinks />
        <CL.HamburgerComponent />
      </Nav_Wrapper>
    </Nav_Div>
  )
}

export default Navbar