import React from "react"
import Helmet from "react-helmet"
import Seo from "components/seo"
import Layout from "components/layout"

import AVRKCover from "components/pages/avrk/avrk-cover"
import AVRKUseCases from "components/pages/avrk/avrk-use-cases"
import AVRKHowToGet from "components/pages/avrk/avrk-how-to-get"
import AVRKTokenomics from "components/pages/avrk/avrk-tokenomics"
import AVRKReleaseSchedule from "components/pages/avrk/avrk-release-schedule"
import AVRKRoadmap from "components/pages/avrk/avrk-roadmap"

const AVRKPage = () => {
  return (
    <>
      <Seo title="Avarik Saga NFT" />
      <Layout>
        <Helmet>
          <body className="bd-avrk" />
        </Helmet>
        <AVRKCover />
        <AVRKUseCases />
        <AVRKHowToGet />
        <AVRKTokenomics />
        <AVRKReleaseSchedule />
        <AVRKRoadmap />
      </Layout>
    </>
  )
}

export default AVRKPage
