import { Modal } from "components/anti"
import AvarikButton from "components/avarik-saga/avarik-button"
import AvarikTitle from "components/avarik-saga/avarik-title"
import { useScrollAnim } from "components/hooks/hooks"


const ModalFactions = ({ modal, setModal, selectedFactions }) => {
    const [trigger, anim] = useScrollAnim()
    return (
        <Modal
            id="modal-factions"
            className={`modal-factions ${selectedFactions?.name}`}
            isShowing={modal} hide={() => setModal(null)}
            anotherComponent={
                <div className="img-char-mobile">
                    <img className="img-char-top left-1" src={selectedFactions?.characterTop1} alt="" />
                    <img className="img-char-top left-2" src={selectedFactions?.characterTop2} alt="" />
                    <img className="img-char-top right-1" src={selectedFactions?.characterTop3} alt="" />
                    <img className="img-char-top right-2" src={selectedFactions?.characterTop4} alt="" />
                </div>
            }
        >
            <img className="img-fluid img-flag" src={selectedFactions?.img} />
            <div className="content" ref={trigger}>
                <AvarikTitle title={selectedFactions?.name} titleClassName="title" logo={null} />
                <p className={`description ${anim(3)}`}>{selectedFactions?.description}</p>
            </div>
        </Modal>
    )
}

export default ModalFactions