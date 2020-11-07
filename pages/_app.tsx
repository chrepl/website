import React from 'react'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import SEO from '@local/config/next-seo'

import '@local/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </>
    )
}

export default App
