import {ForwardedRef, TextareaHTMLAttributes} from "react"
import { UseFormRegisterReturn } from "react-hook-form"

export type TTextarea = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  register?: UseFormRegisterReturn,
  label?: string,
  error?: string,
  ref?: ForwardedRef<HTMLTextAreaElement>
}