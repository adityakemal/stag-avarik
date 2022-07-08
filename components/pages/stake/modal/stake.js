import cogoToast from "cogo-toast"
import { Card } from "components/anti"
import { Button } from "components/anti/buttons/buttons"
import { Modal } from "components/anti/modal/modal"


export const ModalStake = ({ modal, setModal, data, onConfirm, loading }) => {
    return (
        <Modal
            id="modalStake"
            isShowing={modal}
            className={`modal-stake`}
            hide={() => loading === "stake" ? cogoToast.info("Please wait until your transaction is finished") : setModal(null)}
        >
            <div className="modal-inner-content">
                <div className="heading">
                    <h4>Stake Avariksaga NFT Token</h4>
                    <p>Are you sure want to stake this token? <br />
                        You will earn approximately {3 * data.length} $VORTEM /Day for staking {data.length} NFT Token </p>
                </div>
                <div className="stake-data">
                    <div className="row w-100 mx-0 my-2">
                        {data.map((item) => (
                            <div className="col-md-2 col-4">
                                <Card
                                    className="card-item-token"
                                    img={item.img}
                                    imgRatio="r-1-1"
                                    text={item.id}
                                    cardBodyClassName="py-0 px-1"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <Button
                    variant="primary"
                    loader={loading === "stake"}
                    className={`w-100 mb-1 ${loading === "stake" ? "loading" : ""}`}
                    onClick={() => onConfirm(data)}
                >
                    Confirm
                </Button>
                <Button
                    variant="outline-primary"
                    className="w-100 mb-1"
                    onClick={() => setModal(null)}
                >
                    Cancel
                </Button>
            </div>
        </Modal>
    )
}