import Layout from "components/layout"
import Gallery from "components/pages/gallery"
import SEO from "components/seo"

const Leaderboard = () => {
  return (
    <>
      <SEO title="Gallery" />
      <Layout hasFooter={false}>
        <Gallery />
      </Layout>
    </>
  )
}

export default Leaderboard
