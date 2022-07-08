import { Accordion } from "components/anti"
import { useScrollAnim, useWindowSize } from "components/hooks/hooks"

import iconDropdown from "assets/img/common/icon_dropdown-black.png"
import bg from "assets/img/common/bg_faq.png"
import bgMobile from "assets/img/common/bg_faq-mobile.png"
import AccordionWrapper from "components/avarik-saga/accordion-wraper"

const Faq = ({list}) => {
    const [trigger, anim] = useScrollAnim()
    const { width } = useWindowSize()

    const ExpandIcon = () => <img src={iconDropdown} className="img-fluid icon-dropdown" />
    return (
        <section className="sc-faq" ref={trigger}>
            <img src={width > 576 ? bg : bgMobile} className="bg" alt="" />
            <div className="py-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className=""></div>
                            <h1 className={`title d-none d-md-block ${anim(1)}`}>
                                Frequently <br /> Asked <br /> Question
                            </h1>
                            <h1 className={`title d-block d-md-none ${anim(1)}`}>
                                Frequently Asked Question
                            </h1>
                            <p className={`mb-5 text-dark ${anim(2)}`}>
                                Explore the vast world of Avarik Saga
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <AccordionWrapper
                                list={list}
                                className="faq-accordion"
                                titleClassName="faq-item-title"
                                variant="line"
                                expandIcon={<ExpandIcon />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq