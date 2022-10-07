import { Link } from "react-router-dom"

export const Card = ({ article }) => {
  return (
    <div className="board">
      <Link
        className="coin"
        to={article.id}
      >
        <p className="">{ article.name }</p>
      </Link>
    </div>
  )
}