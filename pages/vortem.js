import React from "react"
import Helmet from "react-helmet"
import Seo from "components/seo"
import Layout from "components/layout"

import VortemCover from "components/pages/vortem/vortem-cover"
import VortemClaim from "components/pages/vortem/vortem-claim"
import VortemHoldToEarn from "components/pages/vortem/vortem-hold-to-earn"

const VortemPage = () => {
  return (
    <>
      <Seo title="Vortem" />
      <Layout>
        <Helmet>
          <body className="bd-vortem" />
        </Helmet>
        <VortemCover />
        <VortemClaim />
        <VortemHoldToEarn />
      </Layout>
    </>
  )
}

export default VortemPage
