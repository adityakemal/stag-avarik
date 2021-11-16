import React from "react"
import Helmet from "react-helmet"
import Seo from "components/seo"
import Layout from "components/layout"

import ArmorsMain from "components/pages/armors/armors-main"

const ArmorsPage = () => {
  return (
    <>
      <Seo title="Avarik Saga NFT" />
      <Layout>
        <Helmet>
          <body className="bd-litepaper" />
        </Helmet>
        <ArmorsMain />
      </Layout>
    </>
  )
}

export default ArmorsPage
