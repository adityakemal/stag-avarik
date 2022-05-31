import Layout from "components/layout"
import Gallery from "components/pages/gallery"
import SEO from "components/seo"

const Leaderboard = () => {
  return (
    <>
      <SEO title="Gallery" />
      <Layout>
        <Gallery />
      </Layout>
    </>
  )
}

export default Leaderboard
