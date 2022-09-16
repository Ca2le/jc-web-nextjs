import type { AppProps } from 'next/app'
import React, { useContext, useReducer } from 'react'
import * as CL from '../components/components.libary'
import LangageContextComponent, { LangageContext } from '../components/context/langage_context.component'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <LangageContextComponent>
        <CL.Navbar />
        <Component {...pageProps} />
        <CL.Footer />
      </LangageContextComponent>
    </React.Fragment>
  )
}

export default MyApp
