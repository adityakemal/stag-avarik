import logoMetamask from "assets/img/common/logo_wallet_metamask.png"
import logoWalletConnect from "assets/img/common/logo_wallet_wallet-connect.png"
import cogoToast from "cogo-toast"
import { Button } from "components/anti/buttons/buttons"
import { Modal } from "components/anti/modal/modal"


export const ModalConnect = ({ modal, setModal, onConnect, loading }) => {
    return (
        <Modal
            id="modalConnect"
            isShowing={modal}
            className={`modal-stake modal-wallet`}
            hide={() => setModal(null)}
        >
            <div className="modal-inner-content">
                <div className="heading">
                    <h4>Connect your wallet</h4>
                    <p>Connect your wallet with the options below.</p>
                </div>
                <Button
                    variant="outline-white mx-1"
                    className={`"btn metamask ${loading === 'metamask' ? 'loading' : ''}`}
                    onClick={() => onConnect("metamask")}
                    loader={loading === "metamask"}
                >
                    <div className="btn-inner">
                        <img src={logoMetamask} className="img-fluid" alt="Metamask" />
                    </div>
                </Button>
                <Button
                    variant="outline-white mx-1"
                    className={`"btn wallet-connect ${loading === 'walletconnect' ? 'loading' : ''}`}
                    onClick={() => onConnect("walletconnect")}
                    loader={loading === "walletconnect"}
                >
                    <div className="btn-inner">
                        <img
                            src={logoWalletConnect}
                            className="img-fluid"
                            alt="Wallet Connect"
                        />
                    </div>
                </Button>
            </div>
        </Modal>
    )
}