import { useState } from "react"
import { Button } from "components/anti"
import AvarikButton from "components/avarik-saga/avarik-button"
import AvarikTitle from "components/avarik-saga/avarik-title"
import { useScrollAnim } from "components/hooks/hooks"
import StakeAvrk from "./stake-avrk"

import logo from "assets/img/common/logo_main-icon-rounded.png"
import ornamentMobile from "assets/img/common/ornament-mobile.png"

const StakingAvrkMain = () => {
    const [trigger, anim] = useScrollAnim()
    const [isStaking, setIsStaking] = useState(false)
    return (
        <section className="sc-staking-avrk-main" ref={trigger}>
            <div className="overlay"></div>
            <div className="py-main">
                <div className="container mw-lg mx-auto">
                    {isStaking ? (
                        <StakeAvrk setIsStaking={setIsStaking} />
                    ) : (
                        <>
                            <div className={`heading ${anim(1)}`}>
                                <AvarikTitle
                                    title="Staking AVRK"
                                    variant="white"
                                    className="mx-auto"
                                />
                                <p className="text-white">
                                    Earn staking rewards with Avarik Saga
                                </p>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-md-6">
                                    <div className={`box box-staked ${anim(2)}`}>
                                        <p className="label">Total Staked</p>
                                        <div className="text-center">
                                            <h1 className="value">59 K</h1>
                                            <p className="avrk">AVRK</p>
                                        </div>
                                        <div className="row w-100">
                                            <div className="col-6">
                                                <AvarikButton text="Unstake" variant="light" />
                                            </div>
                                            <div className="col-6">
                                                <AvarikButton text="Stake" variant="dark" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={`box box-earned ${anim(4)}`}>
                                        <p className="label">Total Earned</p>
                                        <div className="text-center">
                                            <h1 className="value">59 K</h1>
                                            <p className="avrk">AVRK</p>
                                        </div>
                                        <img src={ornamentMobile} className="img-fluid ornamen" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={`box box-unclaimed ${anim(3)}`}>
                                        <p className="label">Unclaimed Rewards</p>
                                        <div className="text-center">
                                            <h1 className="value">0</h1>
                                            <p className="avrk">AVRK</p>
                                        </div>
                                        <div className="row w-100">
                                            <div className="col-6">
                                                <AvarikButton text="Restake" variant="light" />
                                            </div>
                                            <div className="col-6">
                                                <AvarikButton text="Claim" variant="dark" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-6 ${anim(6)}`}>
                                    <div className="box box-balance">
                                        <p className="label">Total amount staked</p>
                                        <p className="value">$28,359,870.44</p>
                                        <br></br>
                                        <p className="label">Total claimed</p>
                                        <p className="value">$1,482,898.74</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-between mt-4">
                                <div className="col-md-12">
                                    <div className={`box box-market ${anim(5)}`}>
                                        <h6 className="title">Current AVRK Market Price</h6>
                                        <div className="market-header">
                                            <div className="row">
                                                <div className="col-4">
                                                    Pool
                                                </div>
                                                <div className="col-4">
                                                    Staked TVL
                                                </div>
                                                <div className="col-2">
                                                    APR
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="market-content">
                                            <div className="row">
                                                <div className="col-4">
                                                    <img src={logo} className="img-fluid" alt="" />&nbsp; $AVRK
                                                </div>
                                                <div className="col-4">
                                                    $15,329,656.63
                                                </div>
                                                <div className="col-2">
                                                    94.86%
                                                </div>
                                                <div className="col-2">
                                                    <Button size="sm" onClick={() => setIsStaking(true)}>
                                                        Stake
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <img src={logo} className="img-fluid" alt="" />&nbsp; $AVRK / ETH
                                                </div>
                                                <div className="col-4">
                                                    $15,329,656.63
                                                </div>
                                                <div className="col-2">
                                                    94.86%
                                                </div>
                                                <div className="col-2">
                                                    <Button size="sm" onClick={() => setIsStaking(true)}>
                                                        Stake
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section >
    )
}

export default StakingAvrkMain