import Layout from "components/layout"
import LeaderboardMain from "components/pages/leaderboard/leaderboard-main"
import SEO from "components/seo"


const Leaderboard = () => {
    return (
        <>
            <SEO title="Leaderboard" />
            <Layout>
                <LeaderboardMain />
            </Layout>
        </>
    )
}

export default Leaderboard