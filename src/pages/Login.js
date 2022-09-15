import { useState } from "react"


const Login = () => {
    //let name="Mario"
    const [name, setName] = useState("Mario")

    const handleClick = (e)=>{
        // console.log("hello, ninjas",e)
        setName("Luigi")

    }
    const handleClickAgain = (name,e)=>{
        console.log("hello, " + name, e)
    }

    return ( 
        <div className="login">
            <h2>Bem-Vindo</h2>
            <p> Olá, {name} </p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=>handleClickAgain("mariana",e)}>Click me again</button>
        </div>
     );
}
 
export default Login;