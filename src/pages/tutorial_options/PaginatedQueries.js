import {useState} from "react"
import {useQuery} from "react-query"
import axios from "axios"

   //http://localhost:4000/colors?_limit=2&_page=4
const fetchColors = ({queryKey})=>{
    const pageNumber=queryKey[1]
    return  axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}

function PaginatedQueries() {

    const [page, setPage]=useState(1);

    //without pages
    // const {data: colors, isLoading, isFetching, error, isError} = useQuery("colors",fetchColors)
    
    //vs
    //with pages
    const {data: colors, isLoading, isFetching, error, isError} = useQuery(["colors", page],fetchColors,{
        keepPreviousData:true,
    })
    //mantem os dados da pagina anterior ate receber os dados seguintes
    
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
        
    }



  return (
    <>
    <div>
    <h2>PaginatedQueries</h2>
    {colors?.data.map((color)=>{
        return(
            <div key={color.id}>
                <h4>{color.id}. {color.label}</h4>
            </div>
        )
    })}
    </div>
    <div>
    <button onClick={()=>setPage((page)=>page-1)} disabled={page===1}> Prev Page</button>
    <span>{page}</span>
    <button onClick={()=>setPage((page)=>page+1)} disabled={page===4}> Next Page</button>
    </div> 
    {isFetching && "isLoading..."}
    </>
  )
}

export default PaginatedQueries