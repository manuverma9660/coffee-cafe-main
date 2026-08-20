import {useLocation} from "react-router-dom";

function DataTable() {

    const {state} = useLocation();

    if (!state) {
        return <h2>No Data Found</h2>;
    }
    return (
        <div className="table-container">
             <h2>Student Details</h2>
             <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>Courses</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{state.name}</td>
                        <td>{state.email}</td>
                        <td>{state.password}</td>
                        <td>{state.gender}</td>
                        <td>{state.courses.join(", ")}</td>
                        <td>{state.address}</td>
                    </tr>
                </tbody>

             </table>
        </div>
    
  )
}

export default DataTable