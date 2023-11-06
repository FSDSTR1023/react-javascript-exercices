import React, { useEffect, useState } from 'react'

export default function Reloj() {

    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [crono, setCrono] = useState(0)
    const [isCronoRunning, setIsCronoRunning] = useState(false)

    useEffect( () => {

        const timeUpdate = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);

        return () => {
            clearInterval(timeUpdate)
        }

    }, [])

    useEffect( () => {

        const cronoTimer = setInterval(() => {
            if(isCronoRunning){
                setCrono(c => c + 1)
            }
        }, 100);

        return () => {
            clearInterval(cronoTimer)
        }

    },[isCronoRunning])

    return (
        <div className='flex flex-col'>
            <p>Hora Actual: {time}</p>
            <p>Cronometer: {Math.floor(crono / 10)}.{crono % 10}</p>
            <div className='flex'>
                <button onClick={()=>setIsCronoRunning(true)}>Start</button>
                {isCronoRunning ? 
                    <button onClick={()=>setIsCronoRunning(false)}>Stop</button>
                :
                    <button onClick={()=>setCrono(0)}>Reset</button>
                }
            </div>
        </div>
    )
}
