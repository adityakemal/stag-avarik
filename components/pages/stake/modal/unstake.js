import { Card } from "components/anti"
import { Button } from "components/anti/buttons/buttons"
import { Modal } from "components/anti/modal/modal"


export const ModalUnstake = ({ modal, setModal, data, onConfirm }) => {
    return (
        <Modal
            id="modalUnstake"
            isShowing={modal}
            className={`modal-stake`}
            hide={() => setModal(null)}
        >
            <div className="modal-inner-content">
                <div className="heading">
                    <h4>Stake Avariksaga NFT Token</h4>
                    <p>Are you sure want to unstake this token?</p>
                </div>
                <div className="stake-data">
                    <div className="row w-100 mx-0 my-2">
                        {data.map((item) => (
                            <div className="col-md-2">
                                <Card
                                    className="card-item-token"
                                    img={item.img}
                                    imgRatio="r-1-1"
                                    text={item.id}
                                    onClick={() => selectToStake(item)}
                                    cardBodyClassName="py-0 px-1"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <Button
                    variant="primary"
                    className="w-100 mb-1"
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