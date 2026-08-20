 

function Wrapper({children,color="purple"}){
    return(
        <div style={{color:color,border:"3px double blue",backgroundColor:"skyblue",width:"300px",textAlign:"center",margin:"20px" }}>
            {children }
        </div>
    )
}

export default Wrapper