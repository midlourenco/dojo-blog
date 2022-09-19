import { useParams, useNavigate} from "react-router-dom";
import useFetch from "../useFetch";

function BlogDetails() {
    const { id } = useParams()
    const {data: blog, error, isPending} = useFetch("http://localhost:4000/blogs/"+id)
    const navigate = useNavigate();

    const handleDeleted=()=>{
        fetch("http://localhost:4000/blogs/" + id,{
            method:"DELETE",
        }).then(()=>{
            console.log(" blog deleted")
            navigate("/")
        })
    }
    return ( 
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog &&
                <div className="blog-details">                
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p className="blog-content" >{blog.body}</p>

                    <button onClick={handleDeleted}>Delete Blog</button>
                </div>

            
            }

        </div>
     );
}

export default BlogDetails;