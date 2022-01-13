import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core"
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected
} from "@web3-react/injected-connector"
import holdToEarnImage from "assets/img/vortem/5b_staking_image.png"
import logoMain from "assets/img/common/logo_main-title.png"
import cogoToast from "cogo-toast"
import { Card, Modal } from "components/anti"
import { Button } from "components/anti/buttons/buttons"
import { Link } from "components/anti/link/link"
import { useScrollAnim, useWindowSize } from "components/hooks/hooks"
import useEagerConnect from "components/hooks/useEagerConnect"
import useInactiveListener from "components/hooks/useInactiveListener"
import useNft from "components/hooks/useNft"
import useClaimableToken from "components/hooks/useClaimableToken"
import { injected, walletconnect } from "components/utils/connecters"
import { ErrorStateContext } from "context/error-msg-context"
import React, { useContext, useEffect, useState } from "react"
import { ModalConnect } from "./modal/connect"
import AvarikButton from "components/avarik-saga/avarik-button"
import BeforeConnect from "./before-connect"

const truncate = (string, length) => {
    if (string?.length <= length) return string

    let separator = "......"

    let sepLen = separator.length,
        charsToShow = length - sepLen,
        frontChars = Math.ceil(charsToShow / 2),
        backChars = Math.floor(charsToShow / 2)

    return (
        string?.substr(0, frontChars) +
        separator +
        string?.substr(string?.length - backChars)
    )
}

const HoldToEarnMain = ({ }) => {
    const { setErrorMsg } = useContext(ErrorStateContext);
    const [modal, setModal] = useState("")
    const { library, connector, account, activate, error } = useWeb3React();
    const [loading, setLoading] = useState("");
    const [activatingConnector, setActivatingConnector] = useState();
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
    console.log("is loading", isLoading)
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
                                <h1 className="text-white">
                                    Collect your In-Game Currency
                                </h1>
                                <p>
                                    For each Avarik Saga NFT, you will earn approximately 3 $VORTEM per day.
                                </p>
                            </div>
                            <div className="content">
                                <div className="row row-3 mb-3">
                                    <div className="col-lg-6">
                                        <div className={`box-hold-to-earn ${anim(4)}`} ref={triggerToken}>
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
                                                        />
                                                    </div>
                                                ) :
                                                    (
                                                        <div className="box-inner">
                                                            <div className="heading mb-0">
                                                                <h4 className={`mt-2 ${animToken(1)}`}>
                                                                    Wallet Address
                                                                </h4>
                                                            </div>
                                                            <div className="content">
                                                                <div className={`stake-data justify-content-center ${animToken(2)} py-3`}>
                                                                    {truncate(account, width > 576 ? 30 : 20)}
                                                                </div>
                                                            </div>
                                                            <div className="heading mb-0">
                                                                <h4 className={`mt-2 ${animToken(3)}`}>
                                                                    Token
                                                                </h4>
                                                            </div>
                                                            <div className="content">
                                                                <div className={`stake-data earned ${animToken(4)}`}>
                                                                    <span className="label">Avarik Saga in Wallet</span>
                                                                    <span className="value">
                                                                        <strong>{listToken.length}</strong>
                                                                        <small> NFT</small>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                            }
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className={`box-hold-to-earn ${anim(5)}`} ref={triggerEarned}>
                                            <div className="box-earned">
                                                <p className={`${animEarned(1)}`}>
                                                    You will earn approximately {3 * listToken.length} $VORTEM /Day for holding {listToken.length} NFT Token
                                                </p>
                                                <hr />
                                                <div className={`stake-data earned ${animEarned(2)}`}>
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
                                            <h5 className={`text-warning ${animRewards(2)}`}>Game Demo Rewards</h5>
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
                                                    />
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : <BeforeConnect />}
                </div>
            </section>
            <ModalConnect modal={modal} setModal={setModal} loading={loading} onConnect={onConnect} />
        </>
    )
}

export default HoldToEarnMain
