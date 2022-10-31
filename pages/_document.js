import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import loader from '../global/styles/loader/loader'
import React from 'react'

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Montserrat:wght@700&display=swap" rel="stylesheet" />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;700;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <div id={'globalLoader'}>
            <div className="loader">
              <div />
              <div />
            </div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document

