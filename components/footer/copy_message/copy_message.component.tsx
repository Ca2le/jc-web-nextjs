import React, { useContext } from 'react'
import * as CL from '../../components.libary'
import { PopupContainer, Message } from './copy_message.styled'

function CopyMessageComponent() {
  const screen = useContext(CL.ScreenSizeContext)
  const { device, navbarStatus } = screen
  if (device === 'phone') {
    return <></>
  } else return (
    <PopupContainer>
      <CL.Icon icon_type={'popup'} />
      <Message>Copied!</Message>
    </PopupContainer>
  )

  }

  export default CopyMessageComponent