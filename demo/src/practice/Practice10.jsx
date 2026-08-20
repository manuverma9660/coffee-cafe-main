import { useState } from "react"

function Practice10(){
    const [skills,setSkills]=useState([]);
    const handleSkills=(event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }else 
        {
            setSkills([...skills.filter((item)=>item!==event.target.value)])
        }
    }
    return(
        <div>
            <h1>Handle Checkbox in React js</h1>

            <h3>Select your Skills</h3>
                <input type="checkbox" id="php" value="php" onChange={handleSkills}/>
                <label htmlFor="php">PHP</label> <br/> <br/>

                <input type="checkbox" id="html" value="html" onChange={handleSkills}/>
                <label htmlFor="html">HTML</label> <br/> <br/>

                <input type="checkbox" id="css" value="css" onChange={handleSkills}/>
                <label htmlFor="css">CSS</label> <br/> <br/>

                <input type="checkbox" id="js" value="js" onChange={handleSkills}/>
                <label htmlFor="js">JS</label> <br/> <br/>

                <h2 >{skills.toString()}</h2>
        </div>

        
    )
}

export default Practice10