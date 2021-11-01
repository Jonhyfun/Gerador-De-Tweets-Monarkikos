import React from 'react'
import { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500&display=swap" rel="stylesheet"/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
