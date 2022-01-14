import { Modal } from "components/anti"
import AvarikButton from "components/avarik-saga/avarik-button"


const ModalFactions = ({ modal, setModal, selectedFactions }) => {
    return (
        <Modal id="modal-factions" className="modal-factions" isShowing={modal} hide={() => setModal(null)}>
            <div className="heading">
                <h5 className="title mb-0 mb-md-2">Factions</h5>
            </div>
            <div className="row mw-md">
                <div className="col-4 col-img">
                    <img className="img-fluid" src={selectedFactions?.img} />
                </div>
                <div className="col-8 col-text">
                    <h1 className="title">{selectedFactions?.name}</h1>
                    <p className="description">{selectedFactions?.description}</p>
                    <AvarikButton
                        variant="gold"
                        text="Learn More"
                        className="px-5 d-none d-md-block"
                        link="/factions"
                    />
                </div>
                <AvarikButton
                    variant="gold"
                    text="Learn More"
                    className="px-5 d-block d-md-none"
                    link="/factions"
                />
            </div>
        </Modal>
    )
}

export default ModalFactions