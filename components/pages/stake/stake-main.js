import { useWeb3React } from "@web3-react/core"
import logoMain from "assets/img/common/logo_main-title.png"
import cogoToast from "cogo-toast"
import { Button } from "components/anti/buttons/buttons"
import { Image } from "components/anti/image/image"
import { Link } from "components/anti/link/link"
import { Modal } from "components/anti/modal/modal"
import { useScrollAnim } from "components/hooks/hooks"
import { injected, walletconnect } from "components/utils/connecters"
import useEagerConnect from "components/hooks/useEagerConnect";
import useInactiveListener from "components/hooks/useInactiveListener";
import React, { useEffect, useState } from "react"
import { ModalApproval } from "./modal/approval"
import { ModalConnect } from "./modal/connect"
import { ModalStake } from "./modal/stake"
import { ModalWithdraw } from "./modal/withdraw"


const StakeMain = ({ }) => {
    const [modal, setModal] = useState("")
    const [approved, setApproved] = useState(false);
    const [trigger, anim] = useScrollAnim()
    const { connector, account, activate, error } = useWeb3React();
    const [loading, setLoading] = useState("");
    const [activatingConnector, setActivatingConnector] = useState();


    const triedEagerConnect = useEagerConnect();
    useInactiveListener(!triedEagerConnect || !!activatingConnector);

    useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector]);

    const [stake, setStake] = useState({
        countStake: 0,
        countWithdraw: 0,
        total: 5,
        available: 3,
    })
    const [earned, setEarned] = useState({
        count: 0,
        total: 0
    })

    const disabledMinusStake = stake.available === 0 || stake.countStake === 0;
    const disabledPlusStake = stake.countStake === stake.available;
    const disabledMinusWithdraw = stake.total === 0 || stake.countWithdraw === 0;
    const disabledPlusWithdraw = stake.countWithdraw === stake.total;
    const disabledMinusEarned = earned.total === 0 || earned.count === 0;
    const disabledPlusEarned = earned.count === earned.total;


    const handleChange = (type, category) => {
        if (category === 'stake') {
            if (type === "plus") {
                setStake({
                    ...stake,
                    countStake: stake.countStake + 1
                })
            }
            if (type === "minus") {
                setStake({
                    ...stake,
                    countStake: stake.countStake - 1
                })
            }
            if (type === 'max') {
                setStake({
                    ...stake,
                    countStake: stake.available
                })
            }
        }
        if (category === 'withdraw') {
            if (type === "plus") {
                setStake({
                    ...stake,
                    countWithdraw: stake.countWithdraw + 1
                })
            }
            if (type === "minus") {
                setStake({
                    ...stake,
                    countWithdraw: stake.countWithdraw - 1
                })
            }
            if (type === 'max') {
                setStake({
                    ...stake,
                    countWithdraw: stake.total
                })
            }
        }
        if (category === 'earned') {
            if (type === "plus")
                setEarned({
                    ...stake,
                    count: stake.count + 1
                })
            if (type === "minus")
                setEarned({
                    ...stake,
                    count: stake.count - 1
                })
        }
    }
    const onConnect = async (connector) => {
        setLoading(connector);
        try {
            await activate(connector === "walletconnect" ? walletconnect : injected);
        } catch (error) {
            cogoToast.error(error, { hideAfter: 3, heading: '' })
            console.log('error connect', error);
        }
        setLoading(null)
        if (!approved) {
            setModal("modalApproval")
        } else {
            setModal(null);
        }
    };
    return (
        <>
            <section className="sc-stake-main pb-main" ref={trigger}>
                <div className={`container ${account ? 'mw-xl' : 'mw-md'}`}>
                    <Link to="/" className="stake-logo">
                        <img src={logoMain} className={`img-fluid ${anim(1)}`} alt="Logo" />
                    </Link>
                    {account ? (
                        <>
                            <div className={`heading ${anim(2)}`}>
                                <h1 className="text-white">
                                    Stake
                                </h1>
                                <p>
                                    Stake your Avariksaga NFT Token and Earn $Stack
                                </p>
                            </div>
                            <div className={`box ${anim(3)} box-stake`}>
                                <div className="box-inner">
                                    <div className="content">
                                        <div className="row row-3">
                                            <div className="col-lg-6 col-forms">
                                                <form>
                                                    <div className="heading">
                                                        <h2 className={`text-white mb-2 ${anim(5)}`}>
                                                            Earned
                                                        </h2>
                                                    </div>
                                                    <div className={`box ${anim(7)}`}>
                                                        <div className="box-inner">
                                                            <div className="content">
                                                                <div className="stake-data">
                                                                    <span>Total Earned</span>
                                                                    <span>
                                                                        <strong>
                                                                            {earned.total}
                                                                        </strong>
                                                                        <small>$Stack</small>
                                                                    </span>
                                                                </div>
                                                                <div className="stake-counter">
                                                                    <div className="counter-wrapper">
                                                                        <div className="counter">
                                                                            <div
                                                                                className={`counter-button left ${disabledMinusEarned ? "disabled" : ""
                                                                                    }`}
                                                                                onClick={() =>
                                                                                    !disabledMinusEarned &&
                                                                                    handleChange(1, "minus")
                                                                                }
                                                                                role="button"
                                                                                aria-hidden="true"
                                                                            />
                                                                            <h4>{earned.count}</h4>
                                                                            <div
                                                                                className={`counter-button right ${disabledPlusEarned ? "disabled" : ""
                                                                                    }`}
                                                                                onClick={() =>
                                                                                    !disabledPlusEarned &&
                                                                                    handleChange(1, "plus")
                                                                                }
                                                                                role="button"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="stake-button">
                                                                    <Button
                                                                        variant="primary"
                                                                        className="w-100"
                                                                        disabled={earned.total === 0}
                                                                    >
                                                                        Claim
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-lg-6 col-forms">
                                                <form>
                                                    <div className="heading">
                                                        <h2 className={`text-white mb-2 ${anim(7)}`}>
                                                            Staked
                                                        </h2>
                                                    </div>
                                                    <div className={`box ${anim(8)}`}>
                                                        <div className="box-inner">
                                                            <div className="content">
                                                                <div className="stake-data">
                                                                    <span>Total Staked</span>
                                                                    <span>
                                                                        <strong>
                                                                            {stake.total}
                                                                        </strong>
                                                                        <small>Token</small>
                                                                    </span>
                                                                </div>
                                                                <div className="stake-button">
                                                                    <Button
                                                                        variant="danger"
                                                                        className="w-100"
                                                                        disabled={stake.total === 0}
                                                                        onClick={() => setModal("modalWithdraw")}
                                                                    >
                                                                        Unstake
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={`box ${anim(9)}`}>
                                                        <div className="box-inner">
                                                            <div className="content">
                                                                <div className="stake-data">
                                                                    <span>Total Unstaked</span>
                                                                    <span>
                                                                        <strong>
                                                                            {stake.available}
                                                                        </strong>
                                                                        <small>Token</small>
                                                                    </span>
                                                                </div>
                                                                <div className="stake-button">
                                                                    <Button
                                                                        variant="primary"
                                                                        className="w-100 mb-1"
                                                                        onClick={() => setModal("modalStake")}
                                                                    >
                                                                        Stake
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="box connect-wallet fadeInUp d1">
                            <div className="box-inner">
                                <div className="content">
                                    <div className={"heading"}>
                                        <h2 className="fadeInUp d2">Avarik Saga Stake</h2>
                                        <p className={`fadeInUp d3 mb-4 mt-3`}>
                                            Before staking your Avarik Saga Token, please connect by clicking
                                            on the button below.
                                        </p>
                                    </div>
                                    <Button
                                        variant="dark"
                                        className="w-100 fadeInUp d4 btn-connect"
                                        onClick={() => setModal("modalConnect")}
                                    >
                                        Connect
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <ModalApproval modal={modal} setModal={setModal} setApproved={setApproved} />
            <ModalConnect modal={modal} setModal={setModal} loading={loading} onConnect={onConnect} />
            <ModalStake
                modal={modal}
                setModal={setModal}
                stake={stake}
                handleChange={handleChange}
                disabledMinusBtn={disabledMinusStake}
                disabledPlusBtn={disabledPlusStake}
            />
            <ModalWithdraw
                modal={modal}
                setModal={setModal}
                stake={stake}
                handleChange={handleChange}
                disabledMinusBtn={disabledMinusWithdraw}
                disabledPlusBtn={disabledPlusWithdraw}
            />

        </>
    )
}

export default StakeMain
