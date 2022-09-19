import {Fragment, useState} from "react"
import {useInfiniteQuery} from "react-query"
import axios from "axios"

const fetchColors = ({pageParam=1})=>{
    return  axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}


function InfiniteQueries() {

    const {data, 
        isLoading, 
        error, 
        isError, 
        hasNextPage,     
        fetchNextPage,
        isFetching,
        isFetchingNextPage} = useInfiniteQuery( ["colors"],fetchColors,{
            getNextPageParam: (_lastPage,pages)=>{
                if(pages.length < 4){
                    return pages.length + 1
                }else{
                    return undefined
                }
            },
        }
        )

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
    {data?.pages.map((group,i)=>{
        return(
            <Fragment key={i}>
                {group.data.map((color)=>
                 <h4>{color.id}. {color.label}</h4>
                )}
            </Fragment>
        )
    })}
    </div>
    <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>Load more</button>
   
    <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  )
}

export default InfiniteQueries

