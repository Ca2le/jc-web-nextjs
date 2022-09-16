import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useContext } from 'react'
import * as CL from '../components/components.libary'


const Home: NextPage = () => {


  return (
    <React.Fragment>
      <Head>
        <title>jumpcode.org</title>
        <meta name="description" content="A website agency that focuses on
         customized frontend applications and websites that meet the end-user expectations" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <CL.Home />

    </React.Fragment>
  )
}

export default Home
