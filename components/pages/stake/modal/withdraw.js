import { Button } from "components/anti/buttons/buttons"
import { Modal } from "components/anti/modal/modal"


export const ModalWithdraw = ({ modal, setModal, onConfirm }) => {
    return (
        <Modal
            id="modalWithdraw"
            isShowing={modal}
            className={`modal-stake`}
            hide={() => setModal(null)}
        >
            <div className="modal-inner-content">
                <div className="heading">
                    <h4>Claim Avarik Saga $VORTEM</h4>
                    <p>Are you sure want to claim all your $VORTEM?  </p>
                </div>
                <Button
                    variant="primary"
                    className="w-100 mb-1"
                    onClick={onConfirm}
                >
                    CLAIM
                </Button>
                <Button
                    variant="outline-primary"
                    className="w-100 mb-1"
                    onClick={() => setModal(null)}
                >
                    CANCEL
                </Button>
            </div>
        </Modal>
    )
}