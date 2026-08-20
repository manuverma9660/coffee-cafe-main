import { useState } from "react"
function Practice8()
{
    const [val,setVal]=useState("")
    return(
        <div>
            <h1>Get input field value</h1>
            <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter user Name"></input>
            <h1>{val}</h1>
            <button onClick={()=>setVal("")}>Clear Value</button>
        </div>
    )
}

export default Practice8