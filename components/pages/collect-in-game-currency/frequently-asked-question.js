import { Accordion } from "components/anti"
import { useScrollAnim } from "components/hooks/hooks"
import iconDropdown from "assets/img/common/icon_dropdown.png"

const faq = [
    {
        question: "What is hold-to-earn?",
        answer: " It is a mechanism that allows anyone who owns an Avarik NFT to automatically earn approximately 3 $VORTEM per day. Much like putting your money in a deposit or other forms of investment, “hold-to-earn” lets you earn some interest from holding the NFT.",
    },
    {
        question: "How much $VORTEM can I earn?",
        answer: "You can earn around 3 $VORTEM per day for each NFT that you own.",
    },
    {
        question: "When can I claim my tokens?",
        answer: "You can claim your $VORTEM tokens once Avarik Saga has officially and fully launched. For now, you can find ou how many tokens you can earn by connecting to your wallet.",
    },
    {
        question: "Is hold-to-earn like NFT staking?",
        answer: "Yes, this is essentially NFT staking. Our staking feature is still currently under development, which is why players can’t actually claim their $VORTEM tokens yet, and thus this mechanism is temporarily called “hold-to-earn”.",
    },
]

const FrequentlyAskedQuestion = () => {
    const [trigger, anim] = useScrollAnim()
    const ExpandIcon = () => <img src={iconDropdown} className="img-fluid icon-dropdown" />

    return (
        <section className="sc-frequently-asked-question" ref={trigger}>
            <div className="py-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className=""></div>
                            <h1 className={`title d-none d-md-block text-white ${anim(1)}`}>
                                Frequently <br /> Asked <br /> Question
                            </h1>
                            <h1 className={`title d-block d-md-none text-white ${anim(1)}`}>
                                Frequently Asked Question
                            </h1>
                            <p className={`text-white mb-5 ${anim(2)}`}>
                                Explore the vast world of Avarik Saga
                            </p>
                        </div>
                        <div className="col-lg-7">
                            {faq.map((item, i) => (
                                <Accordion
                                    className={`faq-accordion accordion-${i + 1} ${anim(3 + i)}`}
                                    variant="line"
                                    title={item.question}
                                    titleClassName={`faq-item-title`}
                                    expandIcon={<ExpandIcon />}
                                    defaultExpanded={0}
                                    expandedKey={i}
                                >
                                    {item.answer}
                                </Accordion>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FrequentlyAskedQuestion