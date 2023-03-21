import { Fragment } from "react"
import { TimeStamp, TimeStampType } from "@/typings/commom"
const Timeline: React.FunctionComponent = () => {
    return (
        <Fragment>

        </Fragment>
    )
}

const timeStamps: Array<TimeStamp> = []
function addTongjiEducationTimeStamp() {
    const tjEduTimeStamp = { type: TimeStampType.Education, startDate: new Date(2017, 9), title: '同济大学计算机科学与技术专业' }
    timeStamps.push(tjEduTimeStamp)
}
export default Timeline