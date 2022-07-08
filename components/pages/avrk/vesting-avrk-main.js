import AvarikButton from "components/avarik-saga/avarik-button"
import AvarikTitle from "components/avarik-saga/avarik-title"
import { useScrollAnim } from "components/hooks/hooks"

import ornamentMobile from "assets/img/common/ornament-mobile-2.png"

const VestingAvrkMain = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="sc-vesting-avrk-main" ref={trigger}>
            <div className="overlay"></div>
            <div className="py-main">
                <div className="container mw-lg mx-auto">
                    <div className={`heading ${anim(1)}`}>
                        <AvarikTitle
                            title="Vesting AVRK"
                            variant="white"
                            className="mx-auto"
                        />
                        <p className="text-white">
                            Earn vesting rewards with Avarik Saga
                        </p>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-md-4">
                            <div className={`box box-locked ${anim(2)}`}>
                                <p className="label">Locked Balance</p>
                                <div className="text-center">
                                    <h1 className="value">59 K</h1>
                                    <p className="avrk">AVRK</p>
                                </div>
                                <img src={ornamentMobile} className="img-fluid ornamen" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={`box box-unlocked ${anim(3)}`}>
                                <p className="label">Unlocked Balance</p>
                                <div className="text-center">
                                    <h1 className="value">59 K</h1>
                                    <p className="avrk">AVRK</p>
                                </div>
                                <AvarikButton text="Redeem" variant="dark" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={`box box-wallet ${anim(4)}`}>
                                <p className="label">Locked Balance</p>
                                <div className="text-center">
                                    <h1 className="value">59 K</h1>
                                    <p className="avrk">AVRK</p>
                                </div>
                                <img src={ornamentMobile} className="img-fluid ornamen" />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between mt-4">
                        <div className="col-md-8">
                            <div className={`box box-schedule ${anim(5)}`}>
                                <p className="title text-center w-md-100">Vesting Token Schedule</p>
                                <div className="progress-row">
                                    <p className="label">Days to Unlock: &nbsp;<strong>2D : 23H</strong></p>
                                    <div className="progress-box">
                                        In Progress
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div className="vesting-row">
                                    <div>
                                        <h6 className="label">Started at</h6>
                                        <p className="value">2022/06/12</p>
                                    </div>
                                    <div>
                                        <h6 className="label">Vesting Time</h6>
                                        <p className="value">1 years 183 days</p>
                                    </div>
                                    <div className="text-md-right">
                                        <h6 className="label">Ends at</h6>
                                        <p className="value">2023/12/12</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-4 ${anim(6)}`}>
                            <div className="box box-balance">
                                <p className="label">Total Balance</p>
                                <h1 className="value">60 M</h1>
                                <p className="avrk">AVRK</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VestingAvrkMain