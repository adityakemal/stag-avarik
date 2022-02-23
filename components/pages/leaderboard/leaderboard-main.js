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
    const [listSeason, setListSeason] = useState([])
    const [selectedSeason, setSelectedSeason] = useState()
    const { width } = useWindowSize()

    const getUserLeaderboard = (season) => {
        const request = new FormData()
        request.append("season_id", season?.id)
        request.append("limit", 100)
        fetcher.post('/api/public/leaderboard/1/user/get', request).then((res) => {
            setListLeaderboard(res?.data?.result?.data)
        }).catch((err) => {
            cogoToast.error(`${err?.response?.data?.message || err?.message}`)
        })
    }
    const getListSeason = () => {
        fetcher.post('/api/public/season/get').then((res) => {
            const result = res?.data?.seasons.sort((a, b) => a.id - b.id)
            setListSeason(result)
            setSelectedSeason(result[0])
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
        getListSeason()
    }, [])

    useEffect(() => {
        if (selectedSeason) {
            getUserLeaderboard(selectedSeason)
        }
    }, [selectedSeason])
    const isMobile = width < 576
    return (
        <section className="sc-leaderboard-main" ref={trigger}>
            <img src={isMobile ? bgMobile : bg} className="bg" alt="" />
            <div className="py-main">
                <div className={`container${isMobile ? "-null" : ""} mx-auto mw-lg`}>
                    <div className="heading">
                        <AvarikTitle title="Leaderboard" className="text-center" />
                        <p className={anim(2)}>Glory comes to people who seeks</p>
                    </div>
                    <div className="season-row">
                        {listSeason?.map((item, i) => (
                            <div
                                key={i}
                                className={
                                    `season-box ${anim(3 + i)} ${selectedSeason?.id === item?.id ? "selected" : ""}`
                                }
                                onClick={() => setSelectedSeason(item)}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                    <div className="content">
                        <LeaderboardTable columns={columns} data={data} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeaderboardMain
