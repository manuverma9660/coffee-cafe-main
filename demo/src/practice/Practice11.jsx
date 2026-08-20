import { useState } from "react"

function Practice11(){

    const [gender,setGender]=useState('male');
    const [city,setCity]=useState('delhi');
    return(
         <div>
            <h1>Handle Radio and DropDown</h1>
            <h3>Select Gender</h3>
            <input type="radio" name="gender" id="male" onChange={()=>setGender(event.target.value)} value={"male"} checked={gender=='male'}/>
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" onChange={()=>setGender(event.target.value)} value={"female"} checked={gender=='female'}/>
            <label htmlFor="female">Female</label>
            <h2>Selected Gender : {gender}</h2><br/><br/>

            <h4>Select City</h4>
            <select defaultValue={"delhi"} onChange={(event)=>setCity(event.target.value)}>
                <option value="noida">Noida</option>
                <option value="gurgaon">Gurgaon</option>
                <option value="delhi">Delhi</option>
            </select>
            <h2>Selected City : {city}</h2>
         </div>
    )
}

export default Practice11