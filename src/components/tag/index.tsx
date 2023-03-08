import { TagOutlined, ContainerOutlined,CalendarOutlined } from "@ant-design/icons"
import './index.css'
interface TagProps {
    icon?: string
    left?: boolean,
    children: React.ReactNode
}
const Tag: React.FC<TagProps> = ({ icon, left, children }) => {
    function getTagIcon(icon: string | undefined) {
        switch (icon) {
            case 'tag':
                return TagOutlined
            case 'category':
                return ContainerOutlined
            case 'date':
                return CalendarOutlined
            default:
                return TagOutlined
        }
    }
    const TagIcon = getTagIcon(icon)
    return (
        <span className="tag-outline">
            <TagIcon style={{ fontSize: "0.8rem", color: "#a8a7a7" }} /><span className="tag-text">{children}</span>
        </span>
    )
}
const TagSpacer: React.FC = () => {
    return <span className="tag-outline"><span className="tag-text">|</span></span>
}
export default Tag
export { TagSpacer }