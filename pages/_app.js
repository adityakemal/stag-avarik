import "assets/scss/main.scss"

import { LoadingProvider } from "context/loading-context"
import { useEffect } from "react"
import TagManager from "react-gtm-module"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-P9KXR8G",
    })
  }, [])
  return (
    <LoadingProvider>
      <Component {...pageProps} />
    </LoadingProvider>
  )
}

export default MyApp
