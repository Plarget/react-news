import {TArticle} from "@/shared/types/common.ts";
import {FieldValues} from "react-hook-form";

export type TArticleForm = {
  submitText: string,
  onSubmit: (data: FieldValues) => void
  defaultParams?: Omit<TArticle, "id" | "time">
}