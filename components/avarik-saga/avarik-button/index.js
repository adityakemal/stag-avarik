import sideLeftLight from "assets/img/common/side-button-left-light.png"
import sideRightLight from "assets/img/common/side-button-right-light.png"
import sideLeftDark from "assets/img/common/side-button-left-dark.png"
import sideRightDark from "assets/img/common/side-button-right-dark.png"
import { Link } from "components/anti"

const AvarikButton = ({
    text,
    onClick,
    variant = "light",
    className = "",
    sideLeftClassName,
    sideRightClassName,
    target,
    link,
    disabled
}) => {
    if (link) {
        return (
            <Link
                className={`avarik-button ${variant} ${className} ${disabled ? "disabled" : ""}`}
                onClick={onClick}
                target={target}
                to={!disabled && link}
            >
                <div className="overlay" />
                <div className="overlay-dark" />
                <img src={sideRightLight} className={`side-left light ${sideLeftClassName}`} alt="" />
                <img src={sideLeftLight} className={`side-right light ${sideRightClassName}`} alt="" />
                <img src={sideRightDark} className={`side-left dark ${sideLeftClassName}`} alt="" />
                <img src={sideLeftDark} className={`side-right dark ${sideRightClassName}`} alt="" />
                {text}
            </Link>
        )
    }
    return (
        <div
            className={`avarik-button ${variant} ${className} ${disabled ? "disabled" : ""}`}
            onClick={() => !disabled && onClick && onClick()}
        >
            <div className="overlay" />
            <div className="overlay-dark" />
            <img src={sideRightLight} className={`side-left light ${sideLeftClassName}`} alt="" />
            <img src={sideLeftLight} className={`side-right light ${sideRightClassName}`} alt="" />
            <img src={sideRightDark} className={`side-left dark ${sideLeftClassName}`} alt="" />
            <img src={sideLeftDark} className={`side-right dark ${sideRightClassName}`} alt="" />
            {text}
        </div >
    )
}

export default AvarikButton