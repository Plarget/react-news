import type { FC } from "react"
import Article from "@/shared/ui/Article";
import useAppSelector from "@/shared/hooks/useAppSelector";
import "./News.pcss"

const News: FC = () => {
  const articles = useAppSelector(state => state.ArticlesSlice)
  console.log(articles)
  return (
    <section className="news">
      <div className="news__inner container">
        <div className="news__body">
          {articles.map((element) => (
            <Article className="news__article" key={element.id} article={element}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News