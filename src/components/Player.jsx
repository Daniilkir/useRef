
import { useRef } from "react"

function Player ({source}) {
    const playerRef = useRef("")
    console.log(playerRef);

    const playVideo = () => {
        return playerRef.current.play()
    }
    
    const pauseVideo = () => {
        return playerRef.current.pause()
    }

    return (
        <>
            <video ref={playerRef} src={source} width="200px" height="100px">This video can't play</video>
            <button onClick={playVideo}>Play</button>
            <button onClick={pauseVideo}>Pause</button>
        </>
    )

}


export default Player