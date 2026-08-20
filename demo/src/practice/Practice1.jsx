function App(){
    const name= "Anil Sidhu";

    // object
    const userObj={
        name : "Anil",
        email : "anil@email.com",
        age : 50,
    }

    // array
    const userArray=['sam','peter','jack']

    // img through path
    let path ="https://images.pexels.com/photos/20831978/pexels-photo-20831978.jpeg";

    let x=10;
    let y=20;
    function fruit(){
        return "Apple"
    }
    function sum(a,b){
        return a+b;
    }

    function operation(a,b,op){
        if(op=="+"){
            return a+b;
        }else if(op=="-"){
            return a-b;
        }else  {
            return a*b;
        }
    }

    return (
        <div>
            <h1>JSX with Curly Braces</h1>
            <h1>{name?name:"user not found"}</h1>
            <h1>{x+y}</h1>
            <h1>{fruit()}</h1>
            <h1>{sum(10,100)}</h1>
            <h1>{operation(20,40," ")}</h1>
            <h1>{userObj.age}</h1>
            <h1>{userArray[0]}</h1>
            <input type="text" value={name} /><br /><br />
            <img src={path} alt="" style={{
                width:"400px",
                height:"400px",
                objectFit:"cover",
            }}/>
        </div>
    )
}

export default App