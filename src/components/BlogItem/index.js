import './index.css'

const BlogItem = props => {
  const {blogsList} = props
  const {title, description, publishedDate} = blogsList

  return (
    <li className="list-container">
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <p className="publishedDate">{publishedDate}</p>
    </li>
  )
}

export default BlogItem
