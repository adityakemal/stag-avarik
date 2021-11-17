import React from "react"
import Helmet from "react-helmet"
import Seo from "components/seo"
import Layout from "components/layout"

import VortemMain from "components/pages/vortem/vortem-main"

const VortemPage = () => {
  return (
    <>
      <Seo title="Vortem" />
      <Layout>
        <Helmet>
          <body className="bd-vortem" />
        </Helmet>
        <VortemMain />
      </Layout>
    </>
  )
}

export default VortemPage
