const User =({data}) => {
    
    return(
        <div style={{
            border :"2px solid pink",
            padding : "10px",
            margin :"10px",
            width: "400px",
            borderRadius :"10px"
        }}>
             <h3>Name : <span style={{color:'red'}}>{data.name}</span>  </h3>
             <h3>ID : <span style={{color:'green'}}>{data.id}</span>  </h3>
             <h3>Email : <span style={{color:'orange'}}>{data.email}</span>  </h3>
             <h3>Age : <span style={{color:'purple'}}>{data.age}</span>  </h3>
        </div>
    )
}

export default User;