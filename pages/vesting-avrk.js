import { Helmet } from "react-helmet"
import Layout from "components/layout"
import SEO from "components/seo"
import VestingAvrkMain from "components/pages/avrk/vesting-avrk-main"

const VestingAvrk = () => {
    return (
        <>
            <SEO title="Vesting AVRK" />
            <Helmet>
                <body className="bd-vesting-avrk" />
            </Helmet>
            <Layout>
                <VestingAvrkMain />
            </Layout>
        </>
    )
}
export default VestingAvrk