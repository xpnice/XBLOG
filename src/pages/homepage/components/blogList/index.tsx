import BlogCard from "../blogCard"
import './index.css'
const BlogList: React.FunctionComponent = () => {
    return (<div className="blog-list">
        <BlogCard info={null} />
        <BlogCard info={null} />
    </div>
    )
}
export default BlogList