import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core"
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected
} from "@web3-react/injected-connector"
import logoMain from "assets/img/common/logo_main-title.png"
import stakingImage from "assets/img/vortem/5b_staking_image.png"
import cogoToast from "cogo-toast"
import { Card, Modal } from "components/anti"
import { Button } from "components/anti/buttons/buttons"
import { Link } from "components/anti/link/link"
import { useScrollAnim } from "components/hooks/hooks"
import useEagerConnect from "components/hooks/useEagerConnect"
import useInactiveListener from "components/hooks/useInactiveListener"
import useNft from "components/hooks/useNft"
import useStaking from "components/hooks/useStaking"
import { injected, walletconnect } from "components/utils/connecters"
import {
    setApprovalForAll
} from "components/utils/nft-contract"
import {
    claimRewards, deposit,
    withdraw
} from "components/utils/staking-contract"
import { ErrorStateContext } from "context/error-msg-context"
import React, { useContext, useEffect, useState } from "react"
import { ModalApproval } from "./modal/approval"
import { ModalConnect } from "./modal/connect"
import { ModalStake } from "./modal/stake"
import { ModalUnstake } from "./modal/unstake"
import { ModalWithdraw } from "./modal/withdraw"

const StakeMain = ({ }) => {
    const { setErrorMsg } = useContext(ErrorStateContext);
    const [modal, setModal] = useState("")
    const { library, connector, account, activate, error } = useWeb3React();
    const [loading, setLoading] = useState("");
    const [activatingConnector, setActivatingConnector] = useState();

    const [trigger, anim] = useScrollAnim()
    const [triggerToken, animToken] = useScrollAnim()
    const [triggerStake, animStake] = useScrollAnim()
    const [triggerEarned, animEarned] = useScrollAnim()

    const [listToken, setListToken] = useState([])
    const [listTokenTemp, setListTokenTemp] = useState([])
    const [tokenStakeSelected, setTokenStakeSelected] = useState([])
    const [tokenUnstakeSelected, setTokenUnstakeSelected] = useState([])
    const [listStaked, setListStaked] = useState([])
    const [listStakedTemp, setListStakedTemp] = useState([])
    const { isLoading, tokens, isApprovedForAll, refresh } = useNft(account);
    const { isLoading: isUseStakingLoading, stakedTokens, earned, refresh: refreshStaking } = useStaking(account);

    useEffect(() => {
        setListToken(tokens);
        setListTokenTemp(tokens);
        setTokenStakeSelected([]);
    }, [tokens])
    useEffect(() => {
        setListStaked(stakedTokens);
        setListStakedTemp(stakedTokens);
        setTokenUnstakeSelected([]);
    }, [stakedTokens])
    useEffect(() => {
        if (error) {
            getErrorMessage(error)
        } else {
            setErrorMsg("")
        }
    }, [error])

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
        }
        setLoading(null)
        setModal(null)
    };
    const selectToStake = (item) => {
        const staked = [...tokenStakeSelected]
        staked.push(item)
        setTokenStakeSelected(staked)
        const token = listToken.filter((itemToken) => itemToken !== item)
        setListToken(token)
    }
    const setApproved = async () => {
        const txn = await setApprovalForAll(library)
        const tx = await txn.wait();
        await refresh(account);
        setModal("modalStake");
    }
    const onStake = async (data) => {
        try {
            setLoading("stake")
            const tokenIds = data.map(val => val.id)
            console.log(tokenIds)
            const txn = await deposit(library, tokenIds);
            const tx = await txn.wait();
            await refresh(account);
            await refreshStaking(account);
            setModal(null)
        } catch (error) {
            console.log({ error });
        } finally {
            setLoading("")
        }
    }
    const selectToUnstake = (item) => {
        const unstaked = [...tokenUnstakeSelected]
        unstaked.push(item)
        setTokenUnstakeSelected(unstaked)
        const staked = listStaked.filter((itemStaked) => itemStaked !== item)
        setListStaked(staked)
    }
    const onUnstake = async (data) => {
        try {
            setLoading("unstake")
            const tokenIds = data.map(val => val.id)
            console.log(tokenIds)
            const txn = await withdraw(library, tokenIds);
            const tx = await txn.wait();
            await refresh(account);
            await refreshStaking(account);
            setModal(null)
        } catch (error) {
            console.log({ error });
        } finally {
            setLoading("")
        }
    }
    const onClaim = async () => {
        try {
            setLoading("claim")
            const tokenIds = listStakedTemp.map(val => val.id)
            console.log(tokenIds)
            const txn = await claimRewards(library, tokenIds);
            const tx = await txn.wait();
            await refresh(account);
            await refreshStaking(account);
            setModal(null)
        } catch (error) {
            console.log({ error });
        } finally {
            setLoading("")
        }
    }
    const getErrorMessage = (error) => {
        if (error instanceof NoEthereumProviderError) {
            setErrorMsg(
                "No Ethereum browser extension detected, install MetaMask on desktop or visit from a App browser on mobile."
            );
        } else if (error instanceof UnsupportedChainIdError) {
            setErrorMsg("You're connected to an unsupported network.");
        } else if (
            error instanceof UserRejectedRequestErrorInjected ||
            error instanceof UserRejectedRequestErrorWalletConnect
        ) {
            setErrorMsg("Please authorize this website to access your Ethereum account.");
        } else {
            setErrorMsg("An unknown error occurred. Check the console for more details.");
        }
    };
    return (
        <>
            <Modal id="loading" isShowing={isUseStakingLoading ? "loading" : ""} className={`loading-modal fadeIn ${anim(5, "fadeIn")}`}>
                <div className={`loader loader-stake-spinner loader-light loader-exit`}>
                    <div className="img-spinner-wrapper"><div className="img-spinner" /></div>
                </div>
            </Modal>
            <section className="sc-stake-main pb-main" ref={trigger}>
                <div className="container mw-xl">
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
                                    Stake your Avariksaga NFT and Earn Approximately 3 $VORTEM/NFT/day
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
                                                                                    onClick={() => setModal(isApprovedForAll ? "modalStake" : "modalApproval")}
                                                                                >
                                                                                    Confirm Stake
                                                                                </Button>
                                                                                <Button
                                                                                    variant="outline-primary"
                                                                                    className={`w-100 ${anim(3)}`}
                                                                                    onClick={() => {
                                                                                        setListToken([...tokens])
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
                                                                                <strong>{earned.toFixed(5)} </strong>
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
                        <>
                            <div className="heading mt-5">
                                <h4 className="text-white fadeInUp d1">Stake your Token to Earn $VORTEM</h4>
                            </div>
                            <div className="box connect-wallet fadeInUp d1">
                                <div className="box-inner">
                                    <div className="content">
                                        <div className="sc-stake-info">
                                            <div className="container mw-xl">
                                                <div className="row">
                                                    <div className="col-md-6 col-xl-5 col-text">
                                                        <p className={`text-white fadeInUp d2`}>
                                                            Each Avarik NFT in the staking smart contracts will earn 3
                                                            $VORTEM per day.
                                                        </p>
                                                    </div>
                                                    <div className="col-md-6 col-xl-7">
                                                        <img
                                                            src={stakingImage}
                                                            className={`img-fluid fadeInUp d3`}
                                                            alt="Vortem"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"heading"}>
                                            {/* <h2 className="fadeInUp d2">Avarik Saga Stake</h2> */}
                                            <p className={`text-white fadeInUp d4 mb-4 mt-3`}>
                                                Before staking your Avarik Saga Token, please connect by clicking
                                                on the button below.
                                            </p>
                                        </div>
                                        <Button
                                            variant="outline-white"
                                            className="w-100 fadeInUp d5 btn-connect"
                                            onClick={() => setModal("modalConnect")}
                                        >
                                            Connect
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </>
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
                loading={loading}
            />
            <ModalUnstake
                modal={modal}
                setModal={setModal}
                data={tokenUnstakeSelected}
                onConfirm={onUnstake}
                loading={loading}
            />
            <ModalWithdraw
                modal={modal}
                onConfirm={onClaim}
                setModal={setModal}
                loading={loading}
            />

        </>
    )
}

export default StakeMain
