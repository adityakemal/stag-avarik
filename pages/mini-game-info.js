import Layout from "components/layout"
import MiniGameInfoContent from "components/pages/mini-game-info/mini-game-info-content"
import MiniGameInfoCover from "components/pages/mini-game-info/mini-game-info-cover"
import MiniGameInfoTutorial from "components/pages/mini-game-info/mini-game-info-tutorial"
import SEO from "components/seo"
import { Helmet } from "react-helmet"


const MiniGameInfo = () => {
    return (
        <>
            <SEO title="Mini Game Info" />
            <Helmet>
                <body className="bd-mini-game-info" />
            </Helmet>
            <Layout>
                <MiniGameInfoCover />
                <MiniGameInfoTutorial />
                <MiniGameInfoContent />
            </Layout>
        </>
    )
}

export default MiniGameInfo