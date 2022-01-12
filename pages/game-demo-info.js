import Layout from "components/layout"
import GameDemoInfoCover from "components/pages/game-demo-info/game-demo-info-cover"
import SEO from "components/seo"
import { Helmet } from "react-helmet"


const GameDemoInfo = () => {
    return (
        <>
            <SEO title="Game Demo Info" />
            <Helmet>
                <body className="bd-game-demo-info" />
            </Helmet>
            <Layout>
                <GameDemoInfoCover />
            </Layout>
        </>
    )
}

export default GameDemoInfo