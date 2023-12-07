import React,{ useState}from 'react'
import "./progressbar.css"

const Progressbar = () => {
  const[state,setState] = useState(10);

  const handleState = (e) => {
    setState(Number(e.target.value));
  }
  return (
    <div>
        <p>Progress bar</p>
         <div class="progress-bar">
            <div class="bar" style={{width:state}}>{state}</div>
         </div>
         <input type="text" onChange={handleState}/>
    </div>
  )
}

export default Progressbar