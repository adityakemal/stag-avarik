import SEO from "../components/seo"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import VortemShardsCover from "../components/pages/vortem-shards/VortemShardsCover"
import VortemShardsMechanism from "../components/pages/vortem-shards/VortemShardsMechanism"
import VortemShardsLore from "../components/pages/vortem-shards/VortemShardsLore"
import classes from "./VortemShards.module.scss"

function VortemShards() {
  return (
    <>
      <SEO title="Vortem Shards" />
      <Layout mainClass={classes.main}>
        <Helmet>
          <body className="bd-vortem-shards" />
        </Helmet>
        <VortemShardsCover />
        <VortemShardsLore />
        <VortemShardsMechanism />
      </Layout>
    </>
  )
}

export default VortemShards
