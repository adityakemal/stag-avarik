import sideLeft from "assets/img/common/side-button-left.png"
import sideRight from "assets/img/common/side-button-right.png"
import sideLeftGold from "assets/img/common/side-button-left-gold.png"
import sideRightGold from "assets/img/common/side-button-right-gold.png"

const AvarikButton = ({
    text,
    onClick,
    variant = "white",
    className,
    sideLeftClassName,
    sideRightClassName
}) => {
    return (
        <div className={`avarik-button ${variant} ${className}`}>
            <div className="overlay" />
            <div className="overlay-gold" />
            <img src={sideLeft} className={`side-left white ${sideLeftClassName}`} alt="" />
            <img src={sideRight} className={`side-right white ${sideRightClassName}`} alt="" />
            <img src={sideLeftGold} className={`side-left gold ${sideLeftClassName}`} alt="" />
            <img src={sideRightGold} className={`side-right gold ${sideRightClassName}`} alt="" />
            {text}
        </div>
    )
}

export default AvarikButton