import React, { useEffect } from 'react'
import * as Fathom from 'fathom-client'
import { ToastContainer } from 'react-toastify'
import { ReactQueryDevtools } from 'react-query-devtools'
import {
  QueryCache,
  ReactQueryCacheProvider
} from 'react-query'

import { AllContextProviders } from 'lib/components/AllContextProviders'
import { Layout } from 'lib/components/Layout'

import 'react-toastify/dist/ReactToastify.css'
import '@reach/dialog/styles.css'
import '@reach/menu-button/styles.css'
import '@reach/tooltip/styles.css'

import 'assets/styles/utils.css'
import 'assets/styles/index.css'
import 'assets/styles/layout.css'
import 'assets/styles/loader.css'
import 'assets/styles/themes.css'

import 'assets/styles/typography.css'
import 'assets/styles/tables.css'
import 'assets/styles/pool.css'
import 'assets/styles/animations.css'
import 'assets/styles/transitions.css'

import 'assets/styles/pool-toast.css'

import 'assets/styles/reach--custom.css'
import 'assets/styles/vx--custom.css'

const queryCache = new QueryCache()

if (process.env.NEXT_JS_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_JS_SENTRY_DSN,
    release: process.env.NEXT_JS_RELEASE_VERSION
  })
}

function MyApp({ Component, pageProps, router }) {
  // const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    const handleExitComplete = () => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0 })
      }
    }

    router.events.on('routeChangeComplete', handleExitComplete)
    return () => {
      router.events.off('routeChangeComplete', handleExitComplete)
    }
  }, [])

  useEffect(() => {
    const fathomSiteId = process.env.NEXT_JS_FATHOM_SITE_ID

    if (fathomSiteId) {
      Fathom.load(process.env.NEXT_JS_FATHOM_SITE_ID, {
        url: 'https://goose.pooltogether.com/script.js',
        includedDomains: [
          'pooltogether.com',
          'www.pooltogether.com',
        ]
      })

      function onRouteChangeComplete(url) {
        if (window['fathom']) {
          window['fathom'].trackPageview()
        }
      }

      router.events.on('routeChangeComplete', onRouteChangeComplete)

      return () => {
        router.events.off('routeChangeComplete', onRouteChangeComplete)
      }
    }
  }, [])

  // useEffect(() => {
  //   const initi18next = async () => {
  //     await i18next.initPromise.then(() => {
  //       setInitialized(true)
  //     })
  //   }
  //   initi18next()
  // }, [])

  return <>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <AllContextProviders>
        <Layout
          props={pageProps}
        >
          <Component {...pageProps} />
        </Layout>
      </AllContextProviders>
        
      <ReactQueryDevtools />
    </ReactQueryCacheProvider>

    <ToastContainer
      className='pool-toast'
      position='top-center'
      autoClose={7000}
    />
  </>
}

export default MyApp