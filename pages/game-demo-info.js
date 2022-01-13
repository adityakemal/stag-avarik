import Layout from "components/layout"
import GameDemoInfoCover from "components/pages/game-demo-info/game-demo-info-cover"
import GameDemoInfoFormation from "components/pages/game-demo-info/game-demo-info-formation"
import GameDemoInfoLeaderboard from "components/pages/game-demo-info/game-demo-info-leaderboard"
import GameDemoInfoSystem from "components/pages/game-demo-info/game-demo-info-system"
import GameDemoInfoTutorial from "components/pages/game-demo-info/game-demo-info-tutorial"
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
                <GameDemoInfoTutorial />
                <GameDemoInfoSystem />
                <GameDemoInfoFormation />
                <GameDemoInfoLeaderboard />
            </Layout>
        </>
    )
}

export default GameDemoInfo