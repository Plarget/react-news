import type {FC} from "react"
import type {TTextarea} from "./types.ts";
import classNames from "classnames"
import "./Textarea.pcss"


const Textarea: FC<TTextarea> = (props) => {
  const {
    className,
    id,
    register,
    label,
    error,
    ...rest
  } = props


  return (
    <div className={classNames(className, "textarea")}>
      {label && <label className="textarea__label" htmlFor={id}>{label}</label>}
      <textarea
        className="textarea__control"
        id={id}
        {...register}
        {...rest}
      />
      {error && <span className="textarea__error">{error}</span>}
    </div>
  )
}

export default Textarea