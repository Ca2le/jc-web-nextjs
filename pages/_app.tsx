import type { AppProps } from 'next/app'
import React from 'react'
import * as CL from '../components/components.libary'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <CL.Navbar />
      <Component {...pageProps} />
      <CL.Footer />
    </React.Fragment>
  )
}

export default MyApp
