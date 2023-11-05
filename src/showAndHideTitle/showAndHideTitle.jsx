import {React,useState} from 'react'


const ShowAndHideTitle = () => {
    const [state,setState] = useState(false);
    return (
        <div>
            <button onClick={() => setState(!state)}>show/hide</button>
            {state&& <p>Show and Hide Title</p>}
        </div>
    )
}

export default ShowAndHideTitle
