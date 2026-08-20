function ToDo() {
    function callFun() {
        alert("Function Called");
    }

    const fruit=(name)=>{
        alert(name)
    }
    

    return (
        <div>
            <h1>Anil Sidhu ToDos</h1>
            <img src="https://images.pexels.com/photos/30174893/pexels-photo-30174893.jpeg" alt="" className="photo"
                style={{
                    width: "600px",
                    height: "400px",
                    borderRadius: "50px",
                    objectFit: "cover",
                    border: "4px double yellow"
                }} />
            <ul>
                <li>Invent new Traffic Lights</li>
                <li>Rehearse a movie scene </li>
                <li>Improve the spectrum technology</li>
            </ul>
            <button onClick={callFun}>click me</button>
            <button onClick={()=>fruit("apple")}>Apple</button>
            <button onClick={()=>fruit("banana")}>Banana</button>
        </div>
    )
}


export default ToDo