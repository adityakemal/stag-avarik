import { ErrorStateProvider } from "context/error-msg-context"
import { LoadingProvider } from "context/loading-context"
import "assets/scss/main.scss"

import { Web3Provider } from "@ethersproject/providers"
import { Web3ReactProvider } from "@web3-react/core"
import { useEffect } from "react"
import TagManager from "react-gtm-module"
import { ParallaxProvider } from 'react-scroll-parallax';

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
      <ParallaxProvider>
        <LoadingProvider>
          <ErrorStateProvider>
            <Component {...pageProps} />
          </ErrorStateProvider>
        </LoadingProvider>
      </ParallaxProvider>
    </Web3ReactProvider>

  )
}

export default MyApp
