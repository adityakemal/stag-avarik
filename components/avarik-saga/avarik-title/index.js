import left from "assets/img/common/ornament-left.png"
import right from "assets/img/common/ornament-right.png"
import logoImg from "assets/img/common/logo_main-icon.png"
import { useScrollAnim } from "components/hooks/hooks"

const AvarikTitle = ({ title, logo = logoImg, className, titleClassName }) => {
    const [trigger, anim] = useScrollAnim()
    return (
        <div className={`title-wrapper ${className}`} ref={trigger}>
            <img src={logo} className={`logo`} alt="" />
            <img src={left} className="left" alt="" />
            <h1 className={`${anim(1)} ${titleClassName}`}>
                {title}
            </h1>
            <img src={right} className="right" alt="" />
        </div>
    )
}

export default AvarikTitle