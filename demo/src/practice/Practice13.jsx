import User from "./Practice13a"

function Practice13(){
    const userData = [
       {
            id : "1",
            name : "Priya",
            email : "priya@test.com",
            age : "20",
        },
        {
            id : "2",
            name : "Sam",
            email : "sam@test.com",
            age : "23",
        },
        {
            id : "3",
            name : "Shubh",
            email : "shubh@test.com",
            age : "26",
        },
        {
            id : "4",
            name : "Isha",
            email : "isha@test.com",
            age : "22",
        }
    ]
    return(
        <div>
            <h1>Reuse component in Loop</h1>
             
        {
            userData.map((user)=>(
                <div key={user.id}>
                    <User data={user}/>
                </div>
            ))
        }

        </div>
    )
}

export default Practice13
