import React from "react"
import Helmet from "react-helmet"
import Seo from "components/seo"
import Layout from "components/layout"

import WeaponsMain from "components/pages/weapons/weapons-main"

const WeaponsPage = () => {
  return (
    <>
      <Seo title="Avarik Saga NFT" />
      <Layout>
        <Helmet>
          <body className="bd-weapons" />
        </Helmet>
        <WeaponsMain />
      </Layout>
    </>
  )
}

export default WeaponsPage
