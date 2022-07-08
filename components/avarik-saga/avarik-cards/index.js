

const AvarikCards = ({
    wrapperClassName = "",
    imgClassName = "",
    className = "",
    image,
    label,
    onClick,
    isActive,
    variant = "light",
}) => {
    return (
        <div className={`avarik-cards-wrapper ${wrapperClassName} ${isActive ? "active" : ""} ${variant} `} onClick={onClick}>
            <div className="img-wrapper mb-4">
                <div className="overlay-img" />
                <img src={image} className={`img-fluid ${imgClassName}`} />
            </div>
            <div className={`avarik-cards ${className}`}>
                <div className="overlay-hover" />
                <div className="overlay" />
                <p>{label}</p>
            </div>
        </div>
    )
}

export default AvarikCards