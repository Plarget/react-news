import { ForwardedRef, InputHTMLAttributes } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

export type TInput = InputHTMLAttributes<HTMLInputElement> & {
  register?: UseFormRegisterReturn,
  label?: string,
  error?: string,
  ref?: ForwardedRef<HTMLInputElement>
}