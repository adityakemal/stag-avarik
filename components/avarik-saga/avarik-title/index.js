import left from "assets/img/common/ornament-left.png"
import right from "assets/img/common/ornament-right.png"
import leftWhite from "assets/img/common/ornament-left-white.png"
import rightWhite from "assets/img/common/ornament-right-white.png"
import logoImg from "assets/img/common/logo_main-icon.png"
import { useScrollAnim } from "components/hooks/hooks"

const AvarikTitle = ({ title, logo = logoImg, className, titleClassName, variant = "dark" }) => {
    const [trigger, anim] = useScrollAnim()
    return (
        <div className={`title-wrapper ${className} ${variant}`} ref={trigger}>
            <img src={logo} className={`logo`} alt="" />
            <img src={variant === "dark" ? left : leftWhite} className="left" alt="" />
            <h1 className={`${anim(1)} ${titleClassName}`}>
                {title}
            </h1>
            <img src={variant === "dark" ? right : rightWhite} className="right" alt="" />
        </div>
    )
}

export default AvarikTitle