import type { FC } from "react"
import ArticleForm from "@/entities/ArticleForm";
import "./CreateArticle.pcss"
import {useNavigate} from "react-router";
import {FieldValues, SubmitHandler} from "react-hook-form";
import {addArticle} from "@/shared/store/reducers/ArticlesSlice/ArticlesSlice.ts";
import uuid4 from "uuid4";
import {TArticle} from "@/shared/types/common.ts";
import {useDispatch} from "react-redux";

const CreateArticle: FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(addArticle({
      id: uuid4(),
      time: new Date().toISOString(),
      ...data as Omit<TArticle, "id" | "time">
    }))
    navigate("/")
  }

  return (
    <section className="create-article">
      <div className="create-article__inner container">
        <ArticleForm submitText="Создать" onSubmit={onSubmit}/>
      </div>
    </section>
  )
}

export default CreateArticle