import type { AppProps } from 'next/app'
import React from 'react'
import * as CL from '../components/components.libary'
import HamburgerToggleComponent from '../components/context/hamburger_toggle_context'
import LangageContextComponent from '../components/context/langage_context.component'
import ScreenSizeContextComponent from '../components/context/screen_size_context.component'
import { globalStyle as GlobalStyle } from '../global/styles/styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ScreenSizeContextComponent>
        <LangageContextComponent>
          <HamburgerToggleComponent>
            <CL.Navbar />
            <Component {...pageProps} />
            <CL.Footer />
          </HamburgerToggleComponent>
        </LangageContextComponent>
      </ScreenSizeContextComponent>
    </React.Fragment>
  )
}

export default MyApp
