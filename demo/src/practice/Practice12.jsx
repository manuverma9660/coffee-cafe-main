function Practice12(){
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
            <h1>Loop in JSX with Map Function</h1>
            <table border="1">
                <thead >
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
            <h1>Dummy Data</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                     <tr>
                        <td>1</td>
                        <td>Anil</td>
                        <td>anil@test.com</td>
                        <td>30</td>
                    </tr>
                     <tr>
                        <td>1</td>
                        <td>Anil</td>
                        <td>anil@test.com</td>
                        <td>30</td>
                    </tr>
                     <tr>
                        <td>1</td>
                        <td>Anil</td>
                        <td>anil@test.com</td>
                        <td>30</td>
                    </tr>
                     <tr>
                        <td>1</td>
                        <td>Anil</td>
                        <td>anil@test.com</td>
                        <td>30</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Practice12
