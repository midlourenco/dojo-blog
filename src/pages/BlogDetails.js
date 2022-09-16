import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

function BlogDetails() {
    const { id } = useParams()

    const {data: blog, error, isPending} = useFetch("http://localhost:8000/blogs/"+id)

    return ( 
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog &&
                <div className="blog-details">                
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p className="blog-content" >{blog.body}</p>
                </div>

            
            }

        </div>
     );
}

export default BlogDetails;