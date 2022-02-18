import { Modal } from "components/anti"
import AvarikButton from "components/avarik-saga/avarik-button"
import AvarikTitle from "components/avarik-saga/avarik-title"


const ModalFactions = ({ modal, setModal, selectedFactions }) => {
    return (
        <Modal id="modal-factions" className="modal-factions" isShowing={modal} hide={() => setModal(null)}>
            <img className="img-char-top left-1" src={selectedFactions?.characterTop1} alt="" />
            <img className="img-char-top left-2" src={selectedFactions?.characterTop2} alt="" />
            <img className="img-fluid img-flag" src={selectedFactions?.img} />
            <img className="img-char-top right-1" src={selectedFactions?.characterTop3} alt="" />
            <img className="img-char-top right-2" src={selectedFactions?.characterTop4} alt="" />
            <div className="content">
                <img className="img-char" src={selectedFactions?.character} alt="" />
                <AvarikTitle title={selectedFactions?.name} titleClassName="title" logo={null} />
                <p className="description">{selectedFactions?.description}</p>
            </div>
        </Modal>
    )
}

export default ModalFactions