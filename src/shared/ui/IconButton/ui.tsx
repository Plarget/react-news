import type {TIconButton} from "./types.ts";
import type {FC} from "react"
import classNames from "classnames";
import "./IconButton.pcss"

const IconButton: FC<TIconButton> = (props) => {
  const {
    className,
    children,
    type = "button", title,
    ...rest
  } = props

  return (
    <button
      className={classNames(className, "icon-button")}
      type={type}
      {...rest}
    >
      <span className="icon-button__container" title={title}>
        {children}
      </span>
    </button>
  )
}

export default IconButton