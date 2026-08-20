function Header(){
 return(
    <div>

         

        <Component/>
        <h4>This is header page {Sum()}</h4>
        <Component/>
    </div>
 )   
}

// second component
function Component(){
    return(
        <h2>This is component</h2>
    )
}

// values
function Sum(){
    return 10*10
}

export default Header;
 