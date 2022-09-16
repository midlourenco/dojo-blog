import { useEffect, useState } from "react"

const useFetch = (endpointURL) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending]=useState(true)
    const [error, setError]=useState(null)

   
    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(()=>{
            fetch(endpointURL, {signal: abortCont.signal})
            .then(response=>{
                console.log(response)
                if(!response.ok){
                    console.log("entrei aqui")
                    throw Error("could not fetch the data for that resource")
                }
                return response.json()
            })
            .then((data)=>{
                setIsPending(false)
                setData(data)
                setError(null)
            })
            .catch((error)=>{
                if(error.name==="AbortError"){
                    console.log("fetch aborted")
                }else{
                    setIsPending(false)
                    setError(error.message)
                    
                }
                
            })
          
            
        },1000)

        return () => abortCont.abort();
    },[endpointURL]);
      


    return {data, isPending, error};

}
 
export default useFetch;