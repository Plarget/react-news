import {InputHTMLAttributes, RefCallback} from "react";

export type TFileInput = InputHTMLAttributes<HTMLInputElement> & {
  label?: string,
  error?: string,
  ref?: RefCallback<HTMLInputElement>

}