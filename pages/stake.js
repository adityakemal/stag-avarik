import Layout from "components/layout"
import StakeMain from "components/pages/stake/stake-main"
import Seo from "components/seo"
import React from "react"
import Helmet from "react-helmet"


const StakePage = () => {
    return (
        <>
            <Seo title="Avarik Saga NFT" />
            <Layout>
                <Helmet>
                    <body className="bd-stake" />
                </Helmet>
                <StakeMain />
            </Layout>
        </>
    )
}

export default StakePage
