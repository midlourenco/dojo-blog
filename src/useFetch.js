import { useEffect, useState } from "react"

const useFetch = (endpointURL) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending]=useState(true)
    const [error, setError]=useState(null)

   
    useEffect(()=>{
        setTimeout(()=>{
            fetch(endpointURL)
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
                setIsPending(false)
                setError(error.message)
                
            })
          
            
        },1000)
    },[endpointURL]);
      


    return {data, isPending, error};

}
 
export default useFetch;