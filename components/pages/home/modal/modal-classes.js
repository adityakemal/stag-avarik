import { Modal, NavTabs, TabContent, TabPane } from "components/anti"
import star from "assets/img/home/icon_star.png"
import ignisIcon from "assets/img/factions/ignis-icon.png"
import tenebrisIcon from "assets/img/factions/tenebris-icon.png"
import terraIcon from "assets/img/factions/terra-icon.png"
import glaciaIcon from "assets/img/factions/glacia-icon.png"


const ModalClasses = ({ modal, setModal, selectedClasses }) => {
    return (
        <Modal id="modal-classes" className="modal-classes" isShowing={modal} hide={() => setModal(null)}>
            <div className="heading">
                <h5 className="title text-white">{selectedClasses?.name} Class</h5>
            </div>
            <NavTabs
                wrapperClassName="modal-class-tabs-wrapper"
                className="modal-class-tabs"
                data={selectedClasses?.type?.map((item) => ({ name: item.title, target: item.id }))}
            />
            <TabContent>
                {selectedClasses?.type?.map((item, i) => (
                    <TabPane id={item.id} className={i === 0 ? "active" : ""}>
                        <div className="row mw-md">
                            <div className="col-5 col-img">
                                <img className="img-fluid" src={item?.img} />
                            </div>
                            <div className="col-7 col-text">
                                <h1 className="title">{item?.title}</h1>
                                <p className="description">{item?.text}</p>
                                <div className="d-flex flex-row align-items-center mb-2">
                                    <img src={star} alt="" className="icon-star" />
                                    <h5 className="mb-0 ml-2 mt-auto">
                                        {item?.population?.type} - {item?.population?.number} ({item?.population?.percentage})
                                    </h5>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <img src={ignisIcon} className="img-fluid icon-faction" alt="ignis" />
                                    </div>
                                    <div className="col">
                                        <img src={glaciaIcon} className="img-fluid icon-faction" alt="glacia" />
                                    </div>
                                    <div className="col">
                                        <img src={terraIcon} className="img-fluid icon-faction" alt="terra" />
                                    </div>
                                    <div className="col">
                                        <img src={tenebrisIcon} className="img-fluid icon-faction" alt="tenebris" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                ))}
            </TabContent>

        </Modal>
    )
}

export default ModalClasses