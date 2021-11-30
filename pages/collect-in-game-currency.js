import Layout from "components/layout"
import HoldToEarnMain from "components/pages/collect-in-game-currency/collect-in-game-currency-main"
import Seo from "components/seo"
import React from "react"
import Helmet from "react-helmet"

const HoldToEarnPage = () => {
    return (
        <>
            <Seo title="Collect your In-Game Currency" />
            <Layout>
                <Helmet>
                    <body className="bd-collect-in-game-currency" />
                </Helmet>
                <HoldToEarnMain />
            </Layout>
        </>
    )
}

export default HoldToEarnPage
