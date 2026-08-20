import {createElement}from"react"


function Practice(){
    return(
        <div>
            <h1>Login User</h1>
        </div>
    )
}

export function Profile(){
    return(
        <div>
            <h1>Profile</h1>
        </div>
    )
}
 
export function Demo(){
    //  const Task="78347598498uroeufj.";
    //  let x=20;
    //  let y=30;
    // return(
    //     <div>
    //         <h1>{x*y} This is Demo Function {Task} </h1>
    //         <button onClick={()=>alert('Hello')}>Click</button>
    //     </div>
    // )


    return createElement("div",{id:"rootDiv"},"Hello Div"),createElement("h1",{class:'h1tag'},"Heading Tag")

    // return(
    //     <div className="other">Hello other</div>
    // )

}


export const Userkey="$u390-10%&*8*4*3*9*4*9";

export default Practice