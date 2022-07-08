import { useWeb3React } from "@web3-react/core"
import { Modal } from "components/anti"
import AvarikButton from "components/avarik-saga/avarik-button"
import AvarikTitle from "components/avarik-saga/avarik-title"
import { useScrollAnim, useWindowSize } from "components/hooks/hooks"
import useClaimableToken from "components/hooks/useClaimableToken"
import useNft from "components/hooks/useNft"
import { truncate } from "components/utils/helpers"
import React, { useEffect, useState } from "react"


const HoldToEarnMain = () => {
    const { account } = useWeb3React();
    const { width } = useWindowSize()

    const [trigger, anim] = useScrollAnim()
    const [triggerToken, animToken] = useScrollAnim()
    const [triggerEarned, animEarned] = useScrollAnim()
    const [triggerRewards, animRewards] = useScrollAnim()

    const [listToken, setListToken] = useState([])
    const { isLoading, tokens, isApprovedForAll, refresh } = useNft(account);
    const { earned, earningRate } = useClaimableToken(listToken.length, account);

    useEffect(() => {
        setListToken(tokens);
    }, [tokens])

    return (
        <>
            {account ? (
                <Modal id="loading" isShowing={isLoading ? "loading" : ""} className={`loading-modal ${anim(5, "fadeIn")}`}>
                    <div className={`loader loader-stake-spinner loader-light loader-exit`}>
                        <div className="img-spinner-wrapper"><div className="img-spinner" /></div>
                    </div>
                </Modal>
            ) : null}
            <section className="sc-collect-in-game-curency-main pb-main" ref={trigger}>
                <div className="container h-100 mw-xl py-main">
                    {account ? (
                        <>
                            <div className={`heading ${anim(2)}`}>
                                <AvarikTitle
                                    title="Collect your In-Game Currency"
                                    variant="white"
                                    className="mx-auto"
                                />
                                <p className="text-white">
                                    For each Avarik Saga NFT, you will earn approximately 3 $VORTEM per day.
                                </p>
                            </div>
                            <div className="content">
                                <div className="row row-3 mb-3">
                                    <div className="col-lg-6">
                                        <div className={`box-hold-to-earn ${anim(4)}`} ref={triggerToken}>
                                            <div className="border"></div>
                                            {
                                                !listToken.length ? (
                                                    <div className="staked-empty">
                                                        <div className="heading">
                                                            <p className={`mt-2 ${animToken(1)}`}>
                                                                No Avarik Saga NFT Token
                                                            </p>
                                                        </div>
                                                        <AvarikButton
                                                            text="Buy on Opensea"
                                                            className={`${animToken(2)}`}
                                                            link="https://opensea.io/collection/avariksagauniverse"
                                                            target="_blank"
                                                            variant="dark"
                                                        />
                                                    </div>
                                                ) :
                                                    (
                                                        <>
                                                            <div className="d-flex justify-content-between py-3">
                                                                <h6 className={`text-dark ${animToken(1)}`}>
                                                                    Wallet Address
                                                                </h6>
                                                                <p className={`text-dark font-weight-bold ${animToken(2)}`}>
                                                                    {truncate(account, width > 576 ? 30 : 20)}
                                                                </p>
                                                            </div>
                                                            <hr />
                                                            <h4 className={`mt-4 text-primary ${animToken(3)}`}>
                                                                Token
                                                            </h4>
                                                            <div className="d-flex justify-content-between mt-4">
                                                                <h6 className={`text-dark ${animToken(1)}`}>
                                                                    Avarik Saga in Wallet
                                                                </h6>
                                                                <p className={`text-dark font-weight-bold ${animToken(2)}`}>
                                                                    {listToken.length} NFT
                                                                </p>
                                                            </div>
                                                        </>
                                                    )
                                            }
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className={`box-hold-to-earn ${anim(5)}`} ref={triggerEarned}>
                                            <div className="border"></div>
                                            <div className="box-earned">
                                                <p className={`${animEarned(1)}`}>
                                                    You will earn approximately {3 * listToken.length} $VORTEM /Day for holding {listToken.length} NFT Token
                                                </p>
                                                <hr />
                                                <div className={`stake-data earned mt-4 ${animEarned(2)}`}>
                                                    <span className="label">Daily Earning Rate</span>
                                                    <span className="value">
                                                        <strong>{earningRate.toFixed(5)} </strong>
                                                        <small> $VORTEM</small>
                                                    </span>
                                                </div>
                                                <div className={`stake-data earned ${animEarned(3)}`}>
                                                    <span className="label">Total Earned</span>
                                                    <span className="value">
                                                        <strong>{earned.toFixed(5)} </strong>
                                                        <small> $VORTEM</small>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" ref={triggerRewards}>
                                    <div className="col-12">
                                        <div className={`box-hold-to-earn box-rewards ${animRewards(1)}`}>
                                            <div className="border"></div>
                                            <div
                                                className={`d-flex justify-content-${listToken?.length ? "between" : "center"}`}
                                            >
                                                <h5 className={`${animRewards(2)}`}>Mini Game Rewards</h5>
                                                {listToken.length ? (
                                                    <p className="text-dark">
                                                        You have earn approximately 0 $VORTEM from playing the mini game
                                                    </p>
                                                ) : null}
                                            </div>
                                            {!listToken.length ? (
                                                <div className="empty">
                                                    <p className={`label ${animRewards(3)}`}>
                                                        Get Avarik Saga NFT Token to see your progress
                                                    </p>
                                                    <AvarikButton
                                                        text="Buy on Opensea"
                                                        className={`px-5 ${animRewards(4)}`}
                                                        link="https://opensea.io/collection/avariksagauniverse"
                                                        target="_blank"
                                                        variant="dark"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="d-flex justify-content-between py-2">
                                                            <h5 className={`text-dark ${animRewards(5)}`}>
                                                                Seasons Played
                                                            </h5>
                                                            <p className={`text-dark ${animRewards(6)}`}>-</p>
                                                        </div>
                                                        <div className="d-flex justify-content-between py-2">
                                                            <h5 className={`text-dark ${animRewards(5)}`}>
                                                                Your Rank
                                                            </h5>
                                                            <p className={`text-dark ${animRewards(6)}`}>
                                                                -
                                                            </p>
                                                        </div>
                                                        <div className="d-flex justify-content-between py-2">
                                                            <h5 className={`text-dark ${animRewards(5)}`}>
                                                                MMR
                                                            </h5>
                                                            <p className={`text-dark ${animRewards(6)}`}>
                                                                -
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="d-flex justify-content-between py-2">
                                                            <h5 className={`text-dark ${animRewards(5)}`}>
                                                                Average Winrate
                                                            </h5>
                                                            <p className={`text-dark ${animRewards(6)}`}>
                                                                -
                                                            </p>
                                                        </div>
                                                        <div className="d-flex justify-content-between py-2">
                                                            <h5 className={`text-dark ${animRewards(5)}`}>
                                                                Total Earned
                                                            </h5>
                                                            <p className={`text-dark ${animRewards(6)}`}>
                                                                <strong>0</strong>
                                                                {" "}$VORTEM
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {/* <AvarikButton
                                                text="Play Mini Game Now"
                                                link="https://game-avariksaga-stag.agatedev.net/"
                                            /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
            </section>
        </>
    )
}

export default HoldToEarnMain
