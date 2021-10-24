import React from "react"
import Helmet from "react-helmet"
import Seo from "components/seo"
import Layout from "components/layout"

import LitePaperMain from "components/pages/litepaper/litepaper-main"

const LitePaperPage = () => {
  return (
    <>
      <Seo title="Avarik Saga NFT" />
      <Layout>
        <Helmet>
          <body className="bd-litepaper" />
        </Helmet>
        <LitePaperMain />
      </Layout>
    </>
  )
}

export default LitePaperPage
