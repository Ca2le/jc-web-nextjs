import type { NextPage } from 'next'
import Head from 'next/head'
import * as component from '../components/components.libary'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>jumpcode.org</title>
        <meta name="description" content="A website agency that focuses on
         customized frontend applications and websites that meet the end-user expectations" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
    <component.Navbar />

    </div>
  )
}

export default Home
