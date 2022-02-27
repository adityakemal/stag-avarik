import { useWeb3React } from "@web3-react/core"
import cogoToast from "cogo-toast"
import AvarikButton from "components/avarik-saga/avarik-button"
import useEagerConnect from "components/hooks/useEagerConnect"
import useInactiveListener from "components/hooks/useInactiveListener"
import { injected, walletconnect } from "components/utils/connecters"
import { useEffect, useState } from "react"
import { Parallax } from "react-parallax"
import { ModalConnect } from "./modal/connect"

import paper from "assets/img/common/paper-2.png"
import img from "assets/img/vortem/img_hold-to-earn.png"
import bgCover from "assets/img/common/bg_hold-to-earn.jpeg"
import bgCoverMobile from "assets/img/common/bg_hold-to-earn-mobile.jpeg"
import AvarikTitle from "components/avarik-saga/avarik-title"
import { useWindowSize } from "components/hooks/hooks"

const BeforeConnect = () => {
    const { activate, connector } = useWeb3React();
    const [modal, setModal] = useState(null)
    const [loading, setLoading] = useState(null)
    const triedEagerConnect = useEagerConnect();
    const [activatingConnector, setActivatingConnector] = useState();
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
            console.log("err", error)
            cogoToast.error(error, { hideAfter: 3, heading: '' })
        }
        setLoading(null)
        setModal(null)
    };
    const { width } = useWindowSize()
    return (
        <section className="sc-before-connect cover-full">
            <ModalConnect modal={modal} setModal={setModal} loading={loading} onConnect={onConnect} />
            <Parallax
                blur={0}
                bgImage={width > 576 ? bgCover : bgCoverMobile}
                strength={200}
                className="cover"
            >
                <div className="py-main container mw-xl">
                    <div className="row">
                        <div className="col-md-5 col-text">
                            <AvarikTitle
                                title="Hold Your Token to Earn $VORTEM"
                                variant="white"
                                className="mx-auto"
                                titleClassName="fadeInUp d1"
                            />
                            <div className="d-none d-md-block">
                                <p className={`text-white fadeInUp d2 mb-3`}>
                                    For each Avarik Saga NFT that you hold will earn approximately 3 $VORTEM per day.
                                </p>
                                <p className={`text-white fadeInUp d3`}>
                                    You can claim your $VORTEM tokens once the game is officially launched.
                                </p>
                                <p className={`text-white fadeInUp d4 mb-4 mt-3 h6`}>
                                    To see how much $VORTEM you can earn, please connect by clicking on the button below.
                                </p>
                                <AvarikButton
                                    className="fadeInUp d5 btn-connect w-250px"
                                    onClick={() => setModal("modalConnect")}
                                    text="Connect Wallet"
                                    variant="dark"
                                />
                            </div>
                        </div>
                        <div className="col-md-7 col-img">
                            <img
                                src={img}
                                className={`img-fluid img-hold-to-earn fadeInUp d3`}
                                alt="Vortem"
                            />
                            <div className="d-flex d-md-none flex-column align-items-center">
                                <p className={`text-white fadeInUp d2 my-3`}>
                                    For each Avarik Saga NFT that you hold will earn approximately 3 $VORTEM per day.
                                </p>
                                <p className={`text-white fadeInUp d3`}>
                                    You can claim your $VORTEM tokens once the game is officially launched.
                                </p>
                                <p className={`text-white fadeInUp d4 mb-4 mt-3 h6`}>
                                    To see how much $VORTEM you can earn, please connect by clicking on the button below.
                                </p>
                                <AvarikButton
                                    className="fadeInUp d5 btn-connect w-250px ml-0"
                                    onClick={() => setModal("modalConnect")}
                                    text="Connect Wallet"
                                    variant="dark"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </section>
    )
}

export default BeforeConnect