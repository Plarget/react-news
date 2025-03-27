import type {TArticleForm} from "./types.ts";
import type {FC} from "react"
import * as yup from "yup"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Input from "@/shared/ui/Input";
import Button from "@/shared/ui/Button";
import Textarea from "@/shared/ui/Textarea";
import FileInput from "@/shared/ui/FileInput";
import "./ArticleForm.pcss"

const schema = yup.object({
  title: yup.string().required("Незаполненное поле"),
  text: yup.string().required("Незаполненное поле"),
  image: yup.string().required("Незаполненное поле")
})

const ArticleForm: FC<TArticleForm> = (props) => {
  const {
    defaultParams,
    onSubmit, submitText,
  } = props

  const {
    handleSubmit, register,
    setValue, watch,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultParams,
  })

  const addImages = (e: any) => {
    if (e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = ((event) => {
        if (event.target) setValue("image", event.target.result as string)
      })

      reader.readAsDataURL(e.target.files[0])
    }
  }

  const imageValue = watch("image");

  return (
    <form className="article-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="article-form__body">
        <FileInput
          className="article-form__file-input" name="file-input"
          accept="image/*, image/jpeg, image/png, image/jpg"
          onChange={addImages}
          label="Изображение"
          error={errors?.image?.message}
        />
        {imageValue && (
          <img
            className="article-form__image"
            src={imageValue} alt="article image"
            width="560" height="300" loading="lazy"
          />
        )}
        <Input
          className="article-form__input"
          register={register("title")}
          id="title"
          label="Заголовок"
          placeholder="Название статьи"
          error={errors?.title?.message}
        />
        <Textarea
          className="article-form__textarea"
          register={register("text")}
          id="title"
          label="Текст"
          placeholder="Описание статьи"
          error={errors?.text?.message}
        />
      </div>
      <Button className="article-form__button" type="submit">{submitText}</Button>
    </form>
  )
}

export default ArticleForm