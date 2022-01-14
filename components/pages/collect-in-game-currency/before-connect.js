import { useWeb3React } from "@web3-react/core"
import holdToEarnImage from "assets/img/vortem/5b_staking_image.png"
import cogoToast from "cogo-toast"
import AvarikButton from "components/avarik-saga/avarik-button"
import useEagerConnect from "components/hooks/useEagerConnect"
import useInactiveListener from "components/hooks/useInactiveListener"
import { injected, walletconnect } from "components/utils/connecters"
import { useEffect, useState } from "react"
import { ModalConnect } from "./modal/connect"

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
    return (
        <section className="sc-before-connect">
            <ModalConnect modal={modal} setModal={setModal} loading={loading} onConnect={onConnect} />
            <div className="py-main container mw-xl">
                <div className="row">
                    <div className="col-md-5 col-text">
                        <h1 className="text-white fadeInUp d1">Hold Your Token to Earn $VORTEM</h1>
                        <p className={`text-white fadeInUp d2 mb-3`}>
                            For each Avarik Saga NFT that you hold will earn approximately 3 $VORTEM per day.
                        </p>
                        <p className={`text-white fadeInUp d3`}>
                            You can claim your $VORTEM tokens once the game is officially launched.
                        </p>
                        <p className={`text-white fadeInUp d4 mb-4 mt-3`}>
                            To see how much $VORTEM you can earn, please connect by clicking on the button below.
                        </p>
                        <AvarikButton
                            className="fadeInUp d5 btn-connect w-250px"
                            onClick={() => setModal("modalConnect")}
                            text="Connect Wallet"
                        />
                    </div>
                    <div className="col-md-7 text-right">
                        <img
                            src={holdToEarnImage}
                            className={`img-fluid img-hold-to-earn fadeInUp d3`}
                            alt="Vortem"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BeforeConnect