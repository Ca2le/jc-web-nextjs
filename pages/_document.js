import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class Document extends NextDocument{
  render() {
    return (
      <Html>
         <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
                <link href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;700;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap' rel='stylesheet' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
      </Html>
    )
  }
}

export default Document

