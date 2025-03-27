import type {TFileInput} from "./types.ts";
import type { FC } from "react"
import classNames from "classnames";
import "./FileInput.pcss"

const FileInput: FC<TFileInput> = (props) => {
  const {
    label, error,
    id, className,
    ...rest
  } = props
  return (
    <div className={classNames(className, "file-input")}  >
      {label && <label className="file-input__label" htmlFor={id}>{label}</label>}
      <input
        className="file-input__control"
        id={id} type="file"
        {...rest}
      />
      {error && <span className="file-input__error">{error}</span>}
    </div>
  )
}

export default FileInput