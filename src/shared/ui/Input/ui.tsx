import type {FC} from "react"
import classNames from "classnames"
import {TInput} from "./types.ts"
import "./Input.pcss"


const Input: FC<TInput> = (props) => {
  const {
    className,
    id,
    register,
    label,
    error,
    ...rest
  } = props


  return (
    <div className={classNames(className, "input")}>
      {label && <label className="input__label" htmlFor={id}>{label}</label>}
      <input
        className="input__control"
        id={id}
        {...register}
        {...rest}
      />
      {error && <span className="input__error">{error}</span>}
    </div>
  )
}

export default Input