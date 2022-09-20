import { useState } from "react";
import {Link} from "react-router-dom"
import Header from "./Header/Header";
import ListFooter from "./ListFooter/ListFooter";

const BlogList = ({blogs,title,...props}) => {

  const [blogsFilterd, setBlogsFiltered] = useState(blogs)


    return ( 
      <>
      <div className="blog-list-container">
        <div className="blog-list">
            {/* <h2>{title}</h2> */}
            <Header title={title} />
            {blogs &&
              <div className="list-filter-options">
                <h5>Filter by author: </h5>
                <button onClick={()=>setBlogsFiltered(blogs.filter((blog)=>blog.author==="mario"))}>Mario</button>
                <button onClick={()=>setBlogsFiltered(blogs.filter((blog)=>blog.author==="yoshi"))}>Yoshi</button>
                <button id="remove-filter-btn"onClick={()=>setBlogsFiltered(blogs)}> Remover filtro</button>
              </div>
            }
            {blogsFilterd.map((blog)=>(
              <div className="blog-preview" key={blog.id}>
                <Link to={"blogs/"+blog.id}>
                  <h2>{blog.title}</h2>
                </Link>
                <p>Written by {blog.author}</p>
                {/* <button onClick={()=>handleDelete(blog.id)}>delete blog</button> */}
              </div>  
            ))} 
        </div>
        
        <ListFooter numberOfResults={blogsFilterd.length}/>
        </div>
        </>
     );
}
 
export default BlogList;