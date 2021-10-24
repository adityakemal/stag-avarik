import "assets/scss/main.scss"

import { LoadingProvider } from "context/loading-context"

function MyApp({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <Component {...pageProps} />
    </LoadingProvider>
  )
}

export default MyApp
