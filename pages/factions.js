import Layout from "components/layout"
import FactionsMain from "components/pages/factions/factions-main"
import SEO from "components/seo"
import { Helmet } from "react-helmet"


const Factions = () => {
    return (
        <>
            <SEO title="Factions" />
            <Helmet>
                <body className="bd-factions" />
            </Helmet>
            <Layout>
                <FactionsMain />
            </Layout>
        </>
    )
}

export default Factions