import { Web3Provider } from "@ethersproject/providers"
import { Web3ReactProvider } from "@web3-react/core"
import "assets/scss/main.scss"

import { ErrorStateProvider } from "context/error-msg-context"
import { LoadingProvider } from "context/loading-context"
import { useEffect } from "react"
import TagManager from "react-gtm-module"

const getLibrary = (provider) => {
  return new Web3Provider(provider);
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-P9KXR8G",
    })
  }, [])
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <LoadingProvider>
        <ErrorStateProvider>
          <Component {...pageProps} />
        </ErrorStateProvider>
      </LoadingProvider>
    </Web3ReactProvider>

  )
}

export default MyApp
