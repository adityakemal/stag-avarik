import { Accordion } from "components/anti"
import { useScrollAnim } from "components/hooks/hooks"
import { useState } from "react"

const AccordionWrapper = ({ list, className, variant, titleClassName, expandIcon }) => {
    const [trigger, anim] = useScrollAnim()
    const [expanded, setExpanded] = useState(false)
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="accordion-wrraper" ref={trigger}>
            {list?.map((item, i) => (
                <Accordion
                    className={`${className} accordion-${i + 1} ${anim(3 + i)}`}
                    variant={variant}
                    title={item.question}
                    titleClassName={titleClassName}
                    expandIcon={expandIcon}
                    defaultExpanded={0}
                    expandedKey={i}
                    expanded={expanded === i}
                    onChange={handleChange(i)}
                >
                    {item.answer}
                </Accordion>
            ))}
        </div>
    )
}

export default AccordionWrapper