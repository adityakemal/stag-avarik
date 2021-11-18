import { Button } from "components/anti/buttons/buttons"
import { Modal } from "components/anti/modal/modal"


export const ModalStake = ({ modal, setModal, stake, handleChange, disabledMinusBtn, disabledPlusBtn }) => {
    return (
        <Modal
            id="modalStake"
            isShowing={modal}
            className={`modal-stake`}
            hide={() => setModal(null)}
        >
            <div className="modal-inner-content">
                <div className="heading">
                    <h4>Stake Avariksaga NFT Token</h4>
                    <p>You have {stake.available} token available to stake</p>
                </div>
                <div className="stake-counter">
                    <div className="counter-wrapper">
                        <div className="counter">
                            <div
                                className={`counter-button left ${disabledMinusBtn ? "disabled" : ""
                                    }`}
                                onClick={() =>
                                    !disabledMinusBtn &&
                                    handleChange("minus", "stake")
                                }
                                role="button"
                                aria-hidden="true"
                            />
                            <h4>{stake.countStake}</h4>
                            <div
                                className={`counter-button right ${disabledPlusBtn ? "disabled" : ""
                                    }`}
                                onClick={() =>
                                    !disabledPlusBtn &&
                                    handleChange("plus", "stake")
                                }
                                role="button"
                                aria-hidden="true"
                            />
                        </div>
                        <Button
                            variant="outline-primary btn-max"
                            onClick={() =>
                                !disabledPlusBtn &&
                                handleChange("max", "stake")
                            }
                            disabled={stake.countStake === stake.total}
                        >
                            Max
                        </Button>
                    </div>
                </div>
                <Button
                    variant="primary"
                    className="w-100 mb-1"
                    disabled={stake.countStake === 0}
                    onClick={() => setModal(null)}
                >
                    Stake
                </Button>
            </div>
        </Modal>
    )
}