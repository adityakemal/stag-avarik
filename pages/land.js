import Layout from "components/layout"
import LandAvarus from "components/pages/land/land-avarus"
import LandCover from "components/pages/land/land-cover"
import SEO from "components/seo"
import { Helmet } from "react-helmet"


const LandPage = () => {
    return (
        <>
            <SEO title="Land" />
            <Helmet>
                <body className="bd-land" />
            </Helmet>
            <Layout>
                <LandCover />
                <LandAvarus />
            </Layout>
        </>
    )
}

export default LandPage