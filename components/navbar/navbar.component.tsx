import React, { FC, ReactElement, useContext } from 'react'
import theme from '../../global/styles/theme'
import * as CL from '../components.libary'
import { ScreenSizeContext } from '../context/screen_size_context.component'
import { Nav_Div, Nav_Wrapper } from './navbar.styled'


function Navbar(): ReactElement {
  const device = useContext(ScreenSizeContext)
  console.log(device)
  return (
    <Nav_Div>
      <Nav_Wrapper>
        <CL.Logo height='100' width='100' color={theme.hexcolors.dark} />
        <CL.NavLinks />
        <CL.Hamburger />
      </Nav_Wrapper>
    </Nav_Div>
  )
}

export default Navbar