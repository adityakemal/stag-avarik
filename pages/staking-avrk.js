import { Helmet } from "react-helmet"
import Layout from "components/layout"
import SEO from "components/seo"
import StakingAvrkMain from "components/pages/avrk/staking-avrk-main"

const StakingAvrk = () => {
    return (
        <>
            <SEO title="Staking AVRK" />
            <Helmet>
                <body className="bd-staking-avrk" />
            </Helmet>
            <Layout>
                <StakingAvrkMain />
            </Layout>
        </>
    )
}
export default StakingAvrk