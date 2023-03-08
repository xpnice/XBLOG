import './index.css'
interface Props {
    clickArrow: Function
}
const Scroller: React.FunctionComponent<Props> = (props:Props) => {
    function clickArrow() {
        props.clickArrow()
    }
    return (
        <div className="arrow" onClick={clickArrow}>
            <span></span>
            <span></span>
        </div>
    )
}
export default Scroller