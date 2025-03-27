import type {TArticleComponent} from "./types.ts";
import type {FC} from "react"
import classNames from "classnames";
import getDateFormatted from "@/shared/utils/getDateFormatted";
import SvgIcon from "@/shared/ui/SvgIcon";
import IconButton from "@/shared/ui/IconButton";
import {useDispatch} from "react-redux";
import {deleteArticle} from "@/shared/store/reducers/ArticlesSlice/ArticlesSlice.ts";
import {useNavigate} from "react-router";
import "./Article.pcss"

const Article: FC<TArticleComponent> = (props) => {
  const {
    article,
    className,
  } = props

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const dateTitle = getDateFormatted(article.time)

  return (
    <article className={classNames(className, "article")}>
      <img
        className="article__image"
        src={article.image} alt="article preview"
        width="560" height="300" loading="lazy"
      />
      <h3 className="article__title title">{article.title}</h3>
      <div className="article__description text">
        <p>
          {article.text}
        </p>
      </div>
      <div className="article__footer">
        <time className="article__time text text--small text--gray-dark" dateTime={article.time}>{dateTitle}</time>
        <IconButton
          className="article__button"
          aria-label="edit article" title="edit article"
          onClick={() => navigate(`/edit-article/${article.id}`)}
        >
          <SvgIcon className="article__button-icon" name="edit"/>
        </IconButton>
        <IconButton
          className="article__button"
          aria-label="delete article" title="delete article"
          onClick={() => dispatch(deleteArticle(article.id))}
        >
          <SvgIcon className="article__button-icon" name="delete"/>
        </IconButton>
      </div>
    </article>
  )
}

export default Article