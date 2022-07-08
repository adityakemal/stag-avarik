import { Helmet } from "react-helmet"
import Layout from "components/layout"
import SEO from "components/seo"
import TeamsMain from "components/pages/teams/teams-main"
import HomeFooter from "components/pages/home/home-footer"

const TeamsPage = () => {
    return (
        <>
            <SEO title="Teams" />
            <Helmet>
                <body className="bd-teams" />
            </Helmet>
            <Layout>
                <TeamsMain />
                <HomeFooter />
            </Layout>
        </>
    )
}
export default TeamsPage