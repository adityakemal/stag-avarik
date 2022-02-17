import { useScrollAnim, useWindowSize } from "components/hooks/hooks"
import { useEffect, useMemo, useState } from "react"
import cogoToast from "cogo-toast"
import AvarikCards from "components/avarik-saga/avarik-cards"
import fetcher from "components/utils/fetcher"
import AvarikTitle from "components/avarik-saga/avarik-title"
import LeaderboardTable from "./leaderboard-table"

import bg from "assets/img/leaderboard/bg-leaderboard.png"
import bgMobile from "assets/img/leaderboard/bg-leaderboard-mobile.png"

const LeaderboardMain = () => {
    const [trigger, anim] = useScrollAnim()
    const [listLeaderboard, setListLeaderboard] = useState([])
    const [seasonName, setSeasonName] = useState("")
    const { width } = useWindowSize()

    const getSeasonName = (id) => {
        fetcher.post('/api/public/season/get').then((res) => {
            const seasonName = res?.data?.seasons?.find((item) => item.id === id)?.name
            setSeasonName(seasonName)
        }).catch((err) => {
            cogoToast.error(`${err?.response?.data?.message || err?.message}`)
        })
    }

    const getUserLeaderboard = () => {
        const request = new FormData()
        request.append("limit", 100)
        fetcher.post('/api/public/leaderboard/1/user/get', request).then((res) => {
            setListLeaderboard(res?.data?.result?.data)
            getSeasonName(res?.data?.season_id)

        }).catch((err) => {
            cogoToast.error(`${err?.response?.data?.message || err?.message}`)
        })
    }
    const columns = useMemo(
        () => [
            {
                Header: 'Rank',
                accessor: 'rank', // accessor is the "key" in the data
            },
            {
                Header: 'Player',
                accessor: 'nickname',
            },
            {
                Header: 'MMR',
                accessor: 'mmr',
            },
            {
                Header: 'Winrate',
                accessor: 'winrate',
            },
        ],
        []
    )
    const data = useMemo(
        () => listLeaderboard?.map((item) => ({
            ...item,
            winrate: `${((item.won_matches / item.total_matches) * 100).toFixed(0)} %`
        })),
        [listLeaderboard]
    )

    useEffect(() => {
        getUserLeaderboard()
    }, [])

    return (
        <section className="sc-leaderboard-main" ref={trigger}>
            <img src={width > 576 ? bg : bgMobile} className="bg" alt="" />
            <div className="py-main">
                <div className="container mx-auto mw-lg">
                    <div className="heading">
                        <AvarikTitle title="Leaderboard" className="text-center" />
                        <p className={anim(2)}>Glory comes to people who seeks</p>
                        <AvarikCards label={`${seasonName}`} isActive wrapperClassName={`${anim(3)}`} variant="dark" />
                    </div>
                    <LeaderboardTable columns={columns} data={data} />
                </div>
            </div>
        </section>
    )
}

export default LeaderboardMain
