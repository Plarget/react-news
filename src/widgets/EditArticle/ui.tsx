import {FC, useEffect, useState} from "react"
import ArticleForm from "@/entities/ArticleForm";
import {useNavigate, useParams} from "react-router";
import useAppSelector from "@/shared/hooks/useAppSelector";
import {TArticle} from "@/shared/types/common.ts";
import {useDispatch} from "react-redux";
import {FieldValues, SubmitHandler} from "react-hook-form";
import {editArticle} from "@/shared/store/reducers/ArticlesSlice/ArticlesSlice.ts";
import "./EditArticle.pcss"

const EditArticle: FC = () => {
  const {id} = useParams();
  const [articleData, setArticleData] = useState<Omit<TArticle, "id" | "time">>()
  const articles = useAppSelector((state) => state.ArticlesSlice)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const item = articles.find((element) => element.id === id)

    if (item) {
      const {id, time, ...restParams} = item
      setArticleData(restParams)
    } else {
      navigate("/")
    }
  }, [id])


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(editArticle({
      id: id!,
      ...data as Omit<TArticle, "id">
    }))
    navigate("/")
  }

  return (
    <section className="edit-article">
      <div className="edit-article__inner container">
        {articleData && (
          <ArticleForm
            submitText="Изменить"
            defaultParams={articleData}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </section>
  )
}

export default EditArticle