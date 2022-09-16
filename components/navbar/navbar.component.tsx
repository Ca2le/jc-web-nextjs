import React, { FC, ReactElement } from 'react'
import * as CL from '../components.libary'
import { Nav_Div } from './navbar.styled'



function Navbar(): ReactElement {
  return (
    <Nav_Div>
      <CL.Logo />
      <CL.Link />
      <CL.Hamburger />
    </Nav_Div>
  )
}

export default Navbar