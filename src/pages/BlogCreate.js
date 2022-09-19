import {useState} from "react"
import { useNavigate } from "react-router-dom"

function BlogCreate() {

    const [title, setTitle]=useState("")
    const [body, setBody]=useState("")
    const [author, setAuthor]=useState("yoshi")
    const [isPending, setIsPending]=useState(false)
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const blog ={title, body, author}
        //console.log(blog)
        setIsPending(true)
        fetch("http://localhost:4000/blogs",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false)
            console.log("new blog created")

        })
        navigate("/")
        // navigate(-1)
    }

    return ( 
    <div className="create">
        <h2>Create a new Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input 
            type="text" 
            required 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />

            <label>Blog body:</label>
            <textarea 
            type="text" 
            required 
            value={body}
            onChange={(e)=>setBody(e.target.value)}
            />

            <label>Blog author:</label>
            <select 
            required 
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
            >
                <option value="mario">Mario</option>
                <option value="yoshi">Yoshi</option>
            </select>
            {!isPending && <button>Create</button>}
            {isPending && <button disabled>Adding blog...</button>}

            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </form>
    </div>
    );
}

export default BlogCreate;