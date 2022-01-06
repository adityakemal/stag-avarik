import React from "react"
import Helmet from "react-helmet"
import Seo from "components/seo"
import Layout from "components/layout"

// import { Loader } from 'components/anti/loader/loader';

import HomeCover from "components/pages/home/home-cover"
import HomeSaga from "components/pages/home/home-saga"
import HomeFactions from "components/pages/home/home-factions"
import HomeClasses from "components/pages/home/home-classes"
import HomeBattle from "components/pages/home/home-battle"

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
        <HomeFactions />
        <HomeClasses />
        <HomeBattle />
      </Layout>
    </>
  )
}

export default HomePage
