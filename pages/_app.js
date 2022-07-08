import { ErrorStateProvider } from "context/error-msg-context"
import { LoadingProvider } from "context/loading-context"
import "assets/scss/main.scss"


import { Web3Provider } from "@ethersproject/providers"
import { Web3ReactProvider } from "@web3-react/core"
import { useEffect, useState } from "react"
import TagManager from "react-gtm-module"
import { ParallaxProvider } from "react-scroll-parallax"
import { Provider } from 'react-redux';
import { store } from "redux/store";

const getLibrary = (provider) => {
  return new Web3Provider(provider)
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-P9KXR8G",
    })
  }, [])

  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  if (typeof window === "undefined") {
    return <></>
  } else {
    return (
      <Web3ReactProvider getLibrary={getLibrary}>
        <ParallaxProvider>
          <LoadingProvider>
            <ErrorStateProvider>
              <Provider store={store}>
                <Component {...pageProps} />
              </Provider>
            </ErrorStateProvider>
          </LoadingProvider>
        </ParallaxProvider>
      </Web3ReactProvider >
    )
  }
}

export default MyApp
