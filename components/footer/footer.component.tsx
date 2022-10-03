import React, { useContext, useEffect, useRef, useState } from 'react'
import theme from '../../global/styles/theme'
import * as CL from '../components.libary'
import { ContactBtnContainer, CopyContainer, IconContainer, Line, BottomContainer, ContactBtn, ContactContainer, ContactInnerContainer, CopyrightLine, FootContainer, LangageToggle, Message, SocialMediaContainer, UpperContainer } from './footer.styled'

type CopyToggleType = React.Dispatch<React.SetStateAction<{
  className: string;
  copied: string;
}>>


async function HandleCopyEvent<T>(event: T, setCopyToggle: CopyToggleType) {
  try {
    await navigator.clipboard.writeText('carl@jumpcode.org').then(() => {
      setCopyToggle({ className: 'check', copied: 'yes' })
      setTimeout(() => {
        setCopyToggle({ className: 'copy', copied: 'no' })
      }, 5000)
    }
    )
  }
  catch (e) {
    console.log('error msg', e)
  }

}
function Footer() {
  const [copyToggle, setCopyToggle] = useState({ className: 'copy', copied: 'no' })
  const { state_langange } = useContext(CL.LangageContext)
  const scrollContext = useContext(CL.ScrollContext)
  const footRef = useRef(null);

  useEffect( () => {
    scrollContext.setState( (prevState: any) => {
    return {...prevState, footerSection: footRef}
  })
},[]) 
  
  return (
    <FootContainer ref={footRef}>
      <UpperContainer>
        <CL.FootLogo />
        <Line />
        <ContactContainer>
          <ContactInnerContainer>
            <Message>{state_langange.foot_h}</Message>
            <ContactBtnContainer >
              <ContactBtn className={copyToggle.copied} type={'text'} value={'carl@jumpcode.org'} readOnly />
              <CopyContainer onClick={(event) => HandleCopyEvent(event, setCopyToggle)} className={copyToggle.className}>
                {copyToggle.copied === 'yes' ? <CL.CopyMessage /> : null}
                <CL.Icon icon_type={copyToggle.className} />
              </CopyContainer>
            </ContactBtnContainer>
            <SocialMediaContainer>
              <IconContainer>
                <CL.Icon icon_type='facebook' />
              </IconContainer>
              <IconContainer>
                <CL.Icon icon_type='linkedin' />
              </IconContainer>
            </SocialMediaContainer>
          </ContactInnerContainer>
        </ContactContainer>
      </UpperContainer>
      <BottomContainer>
        <CopyrightLine>{state_langange.foot_copyright}</CopyrightLine>
        <LangageToggle />
      </BottomContainer>
    </FootContainer>
  )
}
ContactBtnContainer
export default Footer