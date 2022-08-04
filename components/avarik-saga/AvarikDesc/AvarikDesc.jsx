import classes from "./AvarikDesc.module.scss"
import clsx from "clsx"

const AvarikDesc = ({ children, color, classnames, ...props }) => {
  const colorClass = color === "dark" ? classes.dark : classes.light
  return (
    <p {...props} className={clsx(classes.root, colorClass, classnames)}>
      {children}
    </p>
  )
}

export default AvarikDesc
