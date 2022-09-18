import React, { useContext, useReducer, useState } from 'react'
import * as CL from '../components.libary'
import { LangageContext } from '../context/langage_context.component'


function Home() {

  const { state_langange, dispatch } = useContext(LangageContext)

  return (
    <React.Fragment>
      <CL.Section_1 />
      <CL.Section_2 />
      <CL.Section_3 />
    </React.Fragment>
  )
}

export default Home
