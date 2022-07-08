import avarikIcon from "assets/img/common/logo_main-icon.png"
import cogoToast from "cogo-toast"
import { Button } from "components/anti/buttons/buttons"
import { Modal } from "components/anti/modal/modal"

export const ModalApproval = ({ modal, setModal, setApproved }) => {
    return (
        <Modal
            id="modalApproval"
            isShowing={modal}
            className={`modal-stake modal-approval modal-lg`}
            hide={() => setModal(false)}
        >
            <div className="modal-inner-content">
                <div className="heading">
                    <img
                        src={avarikIcon}
                        className="modal-stake-icon img-fluid"
                        alt="Icon"
                    />
                    <h4>Approval</h4>
                    <p>
                        You have to approve this transaction to continue
                    </p>
                    <Button
                        variant="success"
                        className="w-100 mb-1"
                        onClick={setApproved}
                    >
                        Approve
                    </Button>
                </div>
            </div>
        </Modal>
    )
}