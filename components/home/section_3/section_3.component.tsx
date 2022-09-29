import React, { useContext, useEffect, useRef } from 'react'
import * as CL from '../../components.libary'
import {OuterContainer, InnerContainer } from './section_3.styled'

function Section_3() {
  const scrollContext = useContext(CL.ScrollContext)
  const scrollRef = useRef(null);
 
  useEffect( () => {
      console.log('S3 loaded!')
      scrollContext.setState( (prevState: any) => {
      return {...prevState, showroomSection: scrollRef}
    })
  },[]) 
  return (<>
    <CL.Overlap />
    <OuterContainer ref={scrollRef}>
      <InnerContainer>
        <CL.Title />
        <CL.Cards />
        <CL.Subtext />
      </InnerContainer>
    </OuterContainer>
  </>
  )
}

export default Section_3