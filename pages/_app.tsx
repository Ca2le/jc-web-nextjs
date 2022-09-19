import type { AppProps } from 'next/app'
import React from 'react'
import * as CL from '../components/components.libary'
/* Langage state theme of the page ⛳ */
import LangageContextComponent from '../components/context/langage_context.component'
/* Screeb width/height state of window object 🦕 */
import ScreenSizeContextComponent from '../components/context/screen_size_context.component'
import { globalStyle as GlobalStyle } from '../global/styles/styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ScreenSizeContextComponent>
        <LangageContextComponent>
          <CL.Navbar />
          <Component {...pageProps} />
          <CL.Footer />
        </LangageContextComponent>
      </ScreenSizeContextComponent>
    </React.Fragment>
  )
}

export default MyApp
