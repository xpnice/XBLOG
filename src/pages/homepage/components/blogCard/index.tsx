import { BlogCardProps, BlogCardInfo } from "@/typings/commom"
import './index.less'
import mock from './mock.json'
import Tag, { TagSpacer } from '@/components/tag'
// import Tag, { TagSpacer } from "../../../../components/tag"
const mockProps: BlogCardInfo = JSON.parse(JSON.stringify(mock))
const BlogCard: React.FunctionComponent<BlogCardProps | null> = (props) => {
    let BlogInfo = props?.info || mockProps
    const { title, date, category, tags, imgUrl, synopsis } = BlogInfo
    let dateString = new Date(date).toDateString()
    return (
        <div className="blog-card">
            <img className="card-img" alt="" src={imgUrl} height={200}></img>
            <div className="card-context">
                <div className="card-context-title">{title}</div>
                <div className="card-notes">
                    <Tag icon="date">{dateString}</Tag>
                    <TagSpacer />
                    <Tag icon="category">{category}</Tag>
                    <TagSpacer />
                    <Tag icon="tag">{tags[0]}</Tag>

                </div>
                <span>{synopsis}</span>
            </div>

        </div>
    )
}
export default BlogCard