import Layout from "components/layout"

import "assets/scss/main.scss"

import { LoadingProvider } from "context/loading-context"

function MyApp({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoadingProvider>
  )
}

export default MyApp
