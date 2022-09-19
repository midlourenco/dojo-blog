import { useEffect, useState } from "react"
import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";


const Home = () => {

    const {data: blogs, isPending, error} = useFetch("http://localhost:4000/blogs")
   
    return ( 
        <div className="home">
            {/* <h2>Homepage</h2> */}
            {isPending && <p>Loading...</p>}
            {error && <p style={{color:"red"}}>{error}</p>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs"}  /> }
        </div>
     );
}
 
export default Home;