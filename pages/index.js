import React from "react"
// import Helmet from "react-helmet"
import Seo from "components/seo"
// import Layout from "components/layout"

import CommonCover from "components/pages/common/common-cover"
import HomeAbout from "components/pages/home/home-about"

const HomePage = () => {
  return (
    <>
      <Seo title="Home" />

      <CommonCover />
      <HomeAbout />
    </>
  )
}

export default HomePage
