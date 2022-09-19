import { useEffect, useState } from "react"
import PeopleList from "../components/PeopleList.js";
//import useFetch from "../useFetch";
import {useInfiniteQuery, useQuery} from "react-query"



const fetchPeople = async ({queryKey})=>{
    const pageNumber=queryKey[1]
    const response = await fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
    console.log("dentro do fetch")
    return response.json();
  }
  
const People = () => {
    const [page, setPage]=useState(1)
    // const {
    //     data,
    //     fetchNextPage,
    //     fetchPreviousPage,
    //     hasNextPage,
    //     hasPreviousPage,
    //     isFetchingNextPage,
    //     isFetchingPreviousPage,
    //     status,
    // } = useInfiniteQuery(['people'], fetchPeople, {
    //     getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    //     getPreviousPageParam: (firstPage, pages) => firstPage.prevCursor,
    // }); 
    const {
        isLoading,
        isError, 
        error, 
        data, 
        isFetching,
        status,
    } = useQuery(['people', page], fetchPeople); 
    
    console.log(data)
    

    return ( 
        <div className="people">
            {status==="loading" && <p>Loading...</p>}
            {status==="error" && <p style={{color:"red"}}>Error fetching data</p>}
            {status==="success"  && 
            <>
            <button 
            // onClick={() => fetchPreviousPage()} 
            // disabled={!hasPreviousPage}
            onClick={()=>setPage(old=>Math.max(old-1,1))}
            // onClick={()=>setPage(old=>(!data.pages[0].previous? old:old-1))}
            disabled={page===1}
            // onClick={()=>hasPreviousPage? fetchPreviousPage: ""}
            >
                Prev page
            </button>
            <span>{page}</span>
            <button 
            // onClick={() => fetchNextPage()} 
            // disabled={!hasNextPage}
             onClick={()=>setPage(old=>(!data.next? old+1 : old+1))}
             disabled={page===!data.next}
            // onClick={fetchNextPage}
            >
                Next page
            </button>
            <PeopleList list={data.results} title={"All People"}  /> 
            </>
            }
        </div>
     );
}
 
export default People;