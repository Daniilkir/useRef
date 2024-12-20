import { useState, useEffect, useRef } from "react"

const formatTime = (time) => {
    const options = { timeZone: "UTC", timeZoneName: "short" };
    const formatedTime = time.toLocaleTimeString("en-US", options)
    return formatedTime
}
function Timer() {
    const [time, setTime] = useState(new Date())
    const timeRef = useRef(null)
    // let timeRef = null
    const startTimer = () => {

        if (!timeRef.current) {
            timeRef.current = setInterval(() => {
                setTime(new Date())
            })
       
        }
    }
    const stopTimer = () => {
        if (timeRef.current) {
            clearInterval(timeRef.current)
            timeRef.current = null
        }
    }
    return (
        <div>
            <h1>Таймер</h1>
            <span>Пройшло часу {formatTime(time)}</span>
            <button onClick={stopTimer}>Зупинити</button>
            <button onClick={startTimer}>Почати</button>

        </div>
    )
}
export default Timer;