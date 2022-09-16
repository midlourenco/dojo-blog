import { useState } from "react"


const Login = () => {
    //let name="Mario"
    const [name, setName] = useState(true)

    // const handleClick = (e)=>{
    //     // console.log("hello, ninjas",e)
    //     if(name){
    //         setName("Mario")
    //     }else{
    //         setName("Yoshi")
    //     }
    // }
    // const handleClickAgain = (name,e)=>{
    //     console.log("hello, " + name, e)
    // }

    return ( 
        <div className="login">
            <h2>Welcome</h2>
            <p> Hello, {name ? "Mario" : "Yoshi"} </p>
            <button onClick={()=>setName(!name)}>Change name</button>
            {/* <button onClick={(e)=>handleClickAgain("mariana",e)}>Click me again</button> */}
        </div>
     );
}
 
export default Login;