import React, { FC, ReactElement } from 'react'
import theme from '../../global/styles/theme'
import * as CL from '../components.libary'
import { Nav_Div, Nav_Wrapper } from './navbar.styled'


function Navbar(): ReactElement {
  return (
    <Nav_Div>
      <Nav_Wrapper>
        <CL.Logo height='100' width='100' color={theme.hexcolors.dark} />
        <CL.Link />
        <CL.Hamburger />
      </Nav_Wrapper>
    </Nav_Div>
  )
}

export default Navbar