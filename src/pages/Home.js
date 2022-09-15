import { useState } from "react"


const Home = () => {
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
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=>handleClickAgain("mariana",e)}>Click me again</button>
        </div>
     );
}
 
export default Home;