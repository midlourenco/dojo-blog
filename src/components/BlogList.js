import { useState } from "react";
import {Link} from "react-router-dom"
import Header from "./Header/Header";
import ListFooter from "./ListFooter/ListFooter";
import styled from "@emotion/styled"


const Badge = styled.span`
  background-color: ${props=>props.variantColor? props.variantColor : "grey" } ;
  color: ${props=>props.color?props.color: "#fff" };
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  margin-right: 10px;
  `;

const PrimaryBadge = styled(Badge)`
  background-color: #ddd;
  color:#444;
`

const BlogList = ({blogs,title,...props}) => {

  const [blogsFilterd, setBlogsFiltered] = useState(blogs)


    return ( 
      <>
        <Badge>@emotion default componente</Badge>
        <PrimaryBadge>@emotion overwriting settings</PrimaryBadge>
        <Badge variantColor="green">@emotion green</Badge>
        <Badge variantColor="red">@emotion red</Badge>
        <Badge variantColor="yellow"  color={"#444"}>@emotion yellow</Badge>

      <div className="blog-list-container">
        <div className="blog-list">
            {/* <h2>{title}</h2> */}
          
            <Header title={title} />
            {blogs &&
              <div className="list-filter-options">
                <h5>Filter by author: </h5>
                <button onClick={()=>setBlogsFiltered(blogs.filter((blog)=>blog.author==="mario"))}>Mario</button>
                <button onClick={()=>setBlogsFiltered(blogs.filter((blog)=>blog.author==="yoshi"))}>Yoshi</button>
                <button 
                id="remove-filter-btn"
                disabled={blogs.length===blogsFilterd.length}
                onClick={()=>setBlogsFiltered(blogs)}
                > 
                  Remover filtro
                </button>
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