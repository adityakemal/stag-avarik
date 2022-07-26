import Layout from "components/layout"
import Gallery from "components/pages/gallery"
import SEO from "components/seo"
import { Helmet } from "react-helmet"

const Leaderboard = () => {
  return (
    <>
      <SEO title="Gallery" />
      <Helmet>
        <body className="bd-gallery" />
      </Helmet>
      <Layout>
        <Gallery />
      </Layout>
    </>
  )
}

export default Leaderboard
