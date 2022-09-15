import { useEffect, useState } from "react"
import BlogList from "../components/BlogList";
import useFetch from "../useFetch";


const Home = () => {

    // const handleDelete=(idToDelete)=>{
    //     const newBlogs= blogs.filter((blog)=>blog.id!==idToDelete)
    //     setBlogs(newBlogs)
    // }


    
    //
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs")

    return ( 
        <div className="home">
            {/* <h2>Homepage</h2> */}
            {isPending && <p>Loading...</p>}
            {error && <p style={{color:"red"}}>{error}</p>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs"}  />}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="mario")} title={"Mario's Blogs"} handleDelete={handleDelete} /> */}
            {/* <p>{name}</p>
            <button onClick={()=>setName("Luigi")}>Change name</button> */}
        </div>
     );
}
 
export default Home;