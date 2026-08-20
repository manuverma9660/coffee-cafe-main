import { useState } from "react"

function Practice9(){

    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');

    return(
        <div>
            <h1>Controller Component</h1>
            <form method="get">
                <input type="text" value={name} placeholder="Enter Name" onChange={(event)=>setName(event.target.value)}/><br/><br/>
                <input type="password" value={password} placeholder="Enter Password" onChange={(event)=>setPassword(event.target.value)}/><br/><br/>
                <input type="email" value={email} placeholder="Enter Email" onChange={(event)=>setEmail(event.target.value)}/><br/><br/>

                <button>Submit</button><br/><br/>
                <button onClick={()=>{setName('');setPassword('');setEmail('')}}>Clear</button>
                
                <h3>{name}</h3>
                <h3>{password}</h3>
                <h3>{email}</h3>
            </form>
        </div>
    )
}

export default Practice9