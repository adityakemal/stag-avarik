import { useWeb3React } from "@web3-react/core"
import Layout from "components/layout"
import BeforeConnect from "components/pages/collect-in-game-currency/before-connect"
import CollectInGameCurrency from "components/pages/collect-in-game-currency/collect-in-game-currency-main"
import FrequentlyAskedQuestion from "components/pages/collect-in-game-currency/frequently-asked-question"
import Seo from "components/seo"
import React from "react"
import Helmet from "react-helmet"

const HoldToEarnPage = () => {
    const { account } = useWeb3React()
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
