import * as CL from '../../components.libary'
import React, { useContext, useEffect, useRef } from 'react'
import theme from '../../../global/styles/theme'
import { LangageContext, WideCard } from '../../components.libary'
import { CardContainer, HeaderContainer, S2Container, S2InnerContainer } from './section_2.styled'

function Section_2() {
  const { state_langange } = useContext(LangageContext)
  const scrollContext = useContext(CL.ScrollContext)
  const aboutRef = useRef(null);
 
  useEffect( () => {
    console.log('S2 Loaded')
    scrollContext.setState( (prevState: any) => {
      return {...prevState, aboutSection: aboutRef}
    })
  },[]) 
  return (
    <S2Container ref={aboutRef}>
      <S2InnerContainer>
        <CardContainer>
          <WideCard direction={'left'} imgBGColor={theme.hexcolors.rasberry} header={state_langange.about_card_1_h} text={state_langange.about_card_1_txt} link={'www.link.com'} />
          <WideCard direction={'right'} imgBGColor={theme.hexcolors.lemon} header={state_langange.about_card_2_h} text={state_langange.about_card_2_txt} link={'www.link.com'} />
          <WideCard direction={'left'} imgBGColor={theme.hexcolors.grape} header={state_langange.about_card_3_h} text={state_langange.about_card_3_txt} link={'www.link.com'} />
        </CardContainer>
      </S2InnerContainer>
      <CL.Overlap />
    </S2Container>
  )
}

export default Section_2

/*  imgBGColor: string;
    : string;
    text: string;
    link: string; */

