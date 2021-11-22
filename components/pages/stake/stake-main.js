import { useWeb3React } from "@web3-react/core"
import logoMain from "assets/img/common/logo_main-title.png"
import glacia1 from "assets/img/mint/glacia-1.jpg"
import ignis1 from "assets/img/mint/ignis-1.jpg"
import tenebris1 from "assets/img/mint/tenebris-1.jpg"
import terra1 from "assets/img/mint/terra-1.jpg"
import cogoToast from "cogo-toast"
import { Card } from "components/anti"
import { Button } from "components/anti/buttons/buttons"
import { Link } from "components/anti/link/link"
import { useScrollAnim } from "components/hooks/hooks"
import useEagerConnect from "components/hooks/useEagerConnect"
import useInactiveListener from "components/hooks/useInactiveListener"
import { injected, walletconnect } from "components/utils/connecters"
import React, { useEffect, useState } from "react"
import { ModalApproval } from "./modal/approval"
import { ModalConnect } from "./modal/connect"
import { ModalStake } from "./modal/stake"
import { ModalUnstake } from "./modal/unstake"
import { ModalWithdraw } from "./modal/withdraw"


const token = [
    {
        img: ignis1,
        id: "1024",
    },
    {
        img: glacia1,
        id: "1025",
    },
    {
        img: tenebris1,
        id: "1026",
    },
    {
        img: terra1,
        id: "1027",
    },
]


const StakeMain = ({ }) => {
    const [modal, setModal] = useState("")
    const [approved, setApproved] = useState(false);
    const { connector, account, activate, error } = useWeb3React();
    const [loading, setLoading] = useState("");
    const [activatingConnector, setActivatingConnector] = useState();

    const [trigger, anim] = useScrollAnim()
    const [triggerToken, animToken] = useScrollAnim()
    const [triggerStake, animStake] = useScrollAnim()
    const [triggerEarned, animEarned] = useScrollAnim()

    const [listToken, setListToken] = useState(token)
    const [listTokenTemp, setListTokenTemp] = useState(token)
    const [tokenStakeSelected, setTokenStakeSelected] = useState([])
    const [tokenUnstakeSelected, setTokenUnstakeSelected] = useState([])
    const [listStaked, setListStaked] = useState([])
    const [listStakedTemp, setListStakedTemp] = useState([])
    const [earned, setEarned] = useState(0)

    const triedEagerConnect = useEagerConnect();
    useInactiveListener(!triedEagerConnect || !!activatingConnector);
    useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector]);

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
    const selectToStake = (item) => {
        const staked = [...tokenStakeSelected]
        staked.push(item)
        setTokenStakeSelected(staked)
        const token = listToken.filter((itemToken) => itemToken !== item)
        setListToken(token)
    }
    const onStake = (data) => {
        setListStaked([...listStaked, ...data])
        setListStakedTemp([...listStaked, ...data])
        setListTokenTemp(listToken)
        setTokenStakeSelected([])
        setModal(null)
    }
    const selectToUnstake = (item) => {
        const unstaked = [...tokenUnstakeSelected]
        unstaked.push(item)
        setTokenUnstakeSelected(unstaked)
        const staked = listStaked.filter((itemStaked) => itemStaked !== item)
        setListStaked(staked)
    }
    const onUnstake = (data) => {
        setListToken([...listToken, ...data])
        setListTokenTemp([...listToken, ...data])
        setListStakedTemp(listStaked)
        setTokenUnstakeSelected([])
        setModal(null)
    }
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
                                    Stake your Avariksaga NFT Token and Earn 3 $VORTEM /NFT /day
                                </p>
                            </div>
                            <div className={`box ${anim(3)} box-stake`}>
                                <div className="box-inner">
                                    <div className="content">
                                        <div className="row row-3 mb-3">
                                            <div className="col-lg-6 col-forms">
                                                <form>
                                                    <div className={`box ${anim(4)}`} ref={triggerToken}>
                                                        {
                                                            tokenUnstakeSelected.length ? (
                                                                <div className="box-inner">
                                                                    <div className="content">
                                                                        <div className="stake-data">
                                                                            {tokenUnstakeSelected.map((item, i) => (
                                                                                <div className="col-md-2 col-4" key={i}>
                                                                                    <Card
                                                                                        className={`card-item-token ${animToken(i + 1)}`}
                                                                                        img={item.img}
                                                                                        imgRatio="r-1-1"
                                                                                        text={item.id}
                                                                                    />
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                        <div className="stake-button">
                                                                            <Button
                                                                                variant="primary"
                                                                                className={`w-100 mb-2 ${animToken(1)}`}
                                                                                onClick={() => setModal("modalUnstake")}
                                                                            >
                                                                                Confirm Unstake
                                                                            </Button>
                                                                            <Button
                                                                                variant="outline-primary"
                                                                                className={`w-100 ${animToken(2)}`}
                                                                                onClick={() => {
                                                                                    setListStaked([...listStakedTemp])
                                                                                    setTokenUnstakeSelected([])
                                                                                }}
                                                                            >
                                                                                Cancel
                                                                            </Button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ) :
                                                                !listTokenTemp.length ? (
                                                                    <div className="box-inner staked-empty">
                                                                        <div className="heading">
                                                                            <h4 className={`mt-2 ${animToken(1)}`}>
                                                                                No token to stake
                                                                            </h4>
                                                                        </div>
                                                                        <Button
                                                                            variant="primary"
                                                                            className={`w-100 ${animToken(2)}`}
                                                                            link="https://opensea.io/collection/avariksagauniverse"
                                                                        >
                                                                            Buy on Opensea
                                                                        </Button>
                                                                    </div>
                                                                ) :
                                                                    (
                                                                        <div className="box-inner">
                                                                            <div className="heading mb-0">
                                                                                <h4 className={`mt-2 ${animToken(1)}`}>
                                                                                    {listToken.length ? "Click to Stake" : "No Token to Stake"}
                                                                                </h4>
                                                                            </div>
                                                                            <div className="content">
                                                                                {listToken.length ? (
                                                                                    <div className="stake-data">
                                                                                        {listToken.map((item, i) => (
                                                                                            <div className="col-md-2 col-4" key={i}>
                                                                                                <Card
                                                                                                    className={`card-item-token ${animToken(i + 2)}`}
                                                                                                    img={item.img}
                                                                                                    imgRatio="r-1-1"
                                                                                                    text={item.id}
                                                                                                    onClick={() => selectToStake(item)}
                                                                                                />
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                ) : null}
                                                                                <div className="stake-button">
                                                                                    <Button
                                                                                        variant="primary"
                                                                                        className={`w-100 ${anim(3)}`}
                                                                                        disabled={!listToken.length}
                                                                                        onClick={() => {
                                                                                            setTokenStakeSelected([...listTokenTemp])
                                                                                            setListToken([])
                                                                                        }}
                                                                                    >
                                                                                        Stake All
                                                                                    </Button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                        }
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-lg-6 col-forms">
                                                <form>
                                                    <div className={`box ${anim(5)}`} ref={triggerStake}>
                                                        {
                                                            tokenStakeSelected.length ?
                                                                (
                                                                    <div className="box-inner">
                                                                        <div className="content">
                                                                            <div className="stake-data">
                                                                                {tokenStakeSelected.map((item, i) => (
                                                                                    <div className="col-md-2 col-4" key={i}>
                                                                                        <Card
                                                                                            className={`card-item-token ${animStake(i + 1)}`}
                                                                                            img={item.img}
                                                                                            imgRatio="r-1-1"
                                                                                            text={item.id}
                                                                                        />
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                            <div className="stake-button">
                                                                                <Button
                                                                                    variant="primary"
                                                                                    className={`w-100 mb-2 ${anim(2)}`}
                                                                                    onClick={() => setModal("modalStake")}
                                                                                >
                                                                                    Confirm Stake
                                                                                </Button>
                                                                                <Button
                                                                                    variant="outline-primary"
                                                                                    className={`w-100 ${anim(3)}`}
                                                                                    onClick={() => {
                                                                                        setListToken([...token])
                                                                                        setTokenStakeSelected([])
                                                                                    }}
                                                                                >
                                                                                    Cancel
                                                                                </Button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ) :
                                                                !listStakedTemp.length ?
                                                                    (
                                                                        <div className="box-inner staked-empty">
                                                                            <div className="heading">
                                                                                <h4 className={`mt-2 ${animStake(1)}`}>
                                                                                    No token staked
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                    ) :
                                                                    (
                                                                        <div className="box-inner">
                                                                            <div className="heading mb-0">
                                                                                <h4 className={`mt-2 ${animStake(1)}`}>
                                                                                    {listStaked.length ? "Click to Unstake" : "No Token to Unstake"}
                                                                                </h4>
                                                                            </div>
                                                                            <div className="content">
                                                                                {listStaked.length ? (
                                                                                    <div className="stake-data">
                                                                                        {listStaked.map((item, i) => (
                                                                                            <div className="col-md-2 col-4" key={i}>
                                                                                                <Card
                                                                                                    className={`card-item-token ${animStake(i + 2)}`}
                                                                                                    img={item.img}
                                                                                                    imgRatio="r-1-1"
                                                                                                    text={item.id}
                                                                                                    onClick={() => selectToUnstake(item)}
                                                                                                />
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                ) : null}
                                                                                <div className="stake-button">
                                                                                    <Button
                                                                                        variant="primary"
                                                                                        className={`w-100 ${animStake(3)}`}
                                                                                        disabled={!listStaked.length}
                                                                                        onClick={() => {
                                                                                            setTokenUnstakeSelected([...listStakedTemp])
                                                                                            setListStaked([])
                                                                                        }}
                                                                                    >
                                                                                        Unstake All
                                                                                    </Button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                        }
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="row row-3">
                                            <div className="col-lg-6 col-forms">
                                            </div>
                                            <div className="col-lg-6 col-forms">
                                                {!listStakedTemp.length ? null : (
                                                    <form>
                                                        <div className={`box ${anim(7)}`} ref={triggerEarned}>
                                                            <div className={`box-inner box-earned`}>
                                                                <>
                                                                    <div className="heading mb-0">
                                                                        <h4 className={`mt-2 ${animEarned(2)}`}>
                                                                            {listStakedTemp.length} staked NFT
                                                                        </h4>
                                                                    </div>
                                                                    <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                                                                        <div className={`stake-data earned ${animEarned(3)}`}>
                                                                            <span className="label">Total Earned</span>
                                                                            <span className="value">
                                                                                <strong>{earned} </strong>
                                                                                <small> $VORTEM</small>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <Button
                                                                        variant="primary"
                                                                        className={`w-100 ${animEarned(2)}`}
                                                                        onClick={() => setModal("modalWithdraw")}
                                                                    >
                                                                        Claim
                                                                    </Button>
                                                                </>
                                                            </div>
                                                        </div>
                                                    </form>
                                                )}
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
                data={tokenStakeSelected}
                onConfirm={onStake}
            />
            <ModalUnstake
                modal={modal}
                setModal={setModal}
                data={tokenUnstakeSelected}
                onConfirm={onUnstake}
            />
            <ModalWithdraw
                modal={modal}
                setModal={setModal}
            />

        </>
    )
}

export default StakeMain
