import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core"
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected
} from "@web3-react/injected-connector"
import Layout from "components/layout"
import BeforeConnect from "components/pages/collect-in-game-currency/before-connect"
import CollectInGameCurrency from "components/pages/collect-in-game-currency/collect-in-game-currency-main"
import FrequentlyAskedQuestion from "components/pages/collect-in-game-currency/frequently-asked-question"
import Seo from "components/seo"
import { ErrorStateContext } from "context/error-msg-context"
import React, { useContext, useEffect, useState } from "react"
import Helmet from "react-helmet"

const HoldToEarnPage = () => {
    const { account, error } = useWeb3React()
    const { setErrorMsg } = useContext(ErrorStateContext);

    useEffect(() => {
        if (error) {
            getErrorMessage(error)
        } else {
            setErrorMsg("")
        }
    }, [error])

    const getErrorMessage = (error) => {
        if (error instanceof NoEthereumProviderError) {
            setErrorMsg(
                "No Ethereum browser extension detected, install MetaMask on desktop or visit from a App browser on mobile."
            );
        } else if (error instanceof UnsupportedChainIdError) {
            setErrorMsg("You're connected to an unsupported network.");
        } else if (
            error instanceof UserRejectedRequestErrorInjected ||
            error instanceof UserRejectedRequestErrorWalletConnect
        ) {
            setErrorMsg("Please authorize this website to access your Ethereum account.");
        } else {
            setErrorMsg("An unknown error occurred. Check the console for more details.");
        }
    };
    return (
        <>
            <Seo title="Collect your In-Game Currency" />
            <Layout>
                <Helmet>
                    <body className="bd-collect-in-game-currency" />
                </Helmet>
                {account ? (
                    <CollectInGameCurrency />
                ) : (
                    <>
                        <BeforeConnect />
                        <FrequentlyAskedQuestion />
                    </>
                )}
            </Layout>
        </>
    )
}

export default HoldToEarnPage
