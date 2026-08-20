import { useState } from "react"

function Practice3(){
    const [display,setDisplay]=useState(true)

    return (
        <>
            <h1>Toggle in React js</h1>
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
            {
                display? <h1>Anil</h1>:null
            }

             
        </>
    )
}



export default Practice3