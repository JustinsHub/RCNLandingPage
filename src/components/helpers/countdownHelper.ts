import dayjs from "dayjs";

export const getRemainingTime = (timestamp:any) => {
    const timeStampDayjs = dayjs(timestamp)
    const nowDayjs = dayjs()

    return {
        days: getRemainingDays(nowDayjs, timeStampDayjs),
        hours: getRemainingHours(nowDayjs, timeStampDayjs),
        minutes: getRemainingMinutes(nowDayjs, timeStampDayjs),
        seconds: getRemainingSeconds(nowDayjs, timeStampDayjs)
    }
}

const getRemainingSeconds = (nowDayjs:any, timeStampDayjs:any) => {
    const seconds = timeStampDayjs.diff(nowDayjs, 'seconds') % 60
    return seconds
}
const getRemainingMinutes = (nowDayjs:any, timeStampDayjs:any) => {
    const minutes = timeStampDayjs.diff(nowDayjs, 'minutes') % 60
    return minutes
    
}
const getRemainingHours = (nowDayjs:any, timeStampDayjs:any) => {
    const hours = timeStampDayjs.diff(nowDayjs, 'hours') % 24
    return hours
    
}
const getRemainingDays = (nowDayjs:any, timeStampDayjs:any) => {
    const days = timeStampDayjs.diff(nowDayjs, 'days') % 24
    return days

}