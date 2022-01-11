import { Modal } from "components/anti"


const ModalFactions = ({ modal, setModal, selectedFactions }) => {
    return (
        <Modal id="modal-factions" className="modal-factions" isShowing={modal} hide={() => setModal(null)}>
            <div className="heading">
                <h5 className="title text-white">Factions</h5>
            </div>
            <div className="row mw-md">
                <div className="col-4 col-img">
                    <img className="img-fluid" src={selectedFactions?.img} />
                </div>
                <div className="col-8 col-text">
                    <h1 className="title">{selectedFactions?.name}</h1>
                    <p className="description">{selectedFactions?.descriptions}</p>
                </div>
            </div>
        </Modal>
    )
}

export default ModalFactions