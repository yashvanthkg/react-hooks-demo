import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    // if u donot pass dependecy, useEffect will run only once and don not call tick on later
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    //}, [count] ----> u can pass dependecy here

    const tick = () => {
        //setCount(count + 1)
        setCount(prevCount => prevCount +1 ) //or  use previous state to keep track
    }
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
