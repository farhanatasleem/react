import {React,useState} from 'react'

const StopWatch = () => {
    const [state,setState] = useState(0);

    const startCounter = () => {
        setInterval(() => {
            setState((state) => state + 1)
        },1000)
    }
    const stopCounter = () => {
        clearInterval(state);
    }
  return (
    <div>
        <p>{state}</p>
        <button onClick={startCounter}>Start</button>
        <button onClick={stopCounter}>Stop</button>
        <button>Reset</button>
    </div>
  )
}

export default StopWatch