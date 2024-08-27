import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogList} = props
  return (
    <>
      {blogList.map(each => (
        <BlogItem key={each.id} blogsList={each} />
      ))}
    </>
  )
}

export default BlogList
