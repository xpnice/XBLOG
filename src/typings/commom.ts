export interface BlogCardInfo {
    title: string
    imgUrl: string
    date: Date
    category: string
    tags: Array<string>
    synopsis: string
}
export interface BlogCardProps {
    info: BlogCardInfo | null
}
export interface TagProps {
    type: string;
    
}