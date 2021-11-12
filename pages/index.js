import React from "react"
import Helmet from "react-helmet"
import Seo from "components/seo"
import Layout from "components/layout"

// import { Loader } from 'components/anti/loader/loader';

import HomeCover from "components/pages/home/home-cover"
import HomeSaga from "components/pages/home/home-saga"
import HomeCharacters from "components/pages/home/home-characters"
// import HomeRoadmap from "components/pages/home/home-roadmap"
// import HomeLitePaper from "components/pages/home/home-litepaper"
import HomeTeam from "components/pages/home/home-team"
import HomeSocial from "components/pages/home/home-social"
// import HomeVortem from "components/pages/home/home-vortem"

const HomePage = () => {
  return (
    <>
      <Seo title="Avarik Saga NFT" />
      <Helmet>
        <body className="bd-home" />
      </Helmet>
      <Layout>
        <HomeCover />
        <HomeSaga />
        <HomeCharacters />
        {/* <HomeRoadmap /> */}
        {/* <HomeLitePaper /> */}
        {/* <HomeVortem /> */}
        <HomeTeam />
        <HomeSocial />
      </Layout>
    </>
  )
}

export default HomePage
