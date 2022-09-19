import { useEffect, useState } from "react"
import PlanetsList from "../components/PlanetsList.js";
//import useFetch from "../useFetch";
import {useQuery} from "react-query"



const fetchPlanets = async ({queryKey})=>{
    const [_key, greeting, page] = queryKey

    // console.log(page)
    const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`)
    //console.log("dentro do fetch")
    return response.json();
  }
  
const Planets = () => {
    const [page, setPage] = useState(1);
    const {data , status} = useQuery(['planets','hello, ninjas',page], fetchPlanets
    // , {
    //     staleTime: 0,
    //     // cacheTime:10, //se zero usa a chache
    //     onSuccess: ()=>console.log("data fetched with no problem")
     
    // }
    );
    // console.log(data)
    // console.log(status)


    return ( 
        <div className="planets">
            {status==="loading" && <p>Loading...</p>}
            {status==="error" && <p style={{color:"red"}}>Error fetching data</p>}
            <button onClick={()=>setPage(1)}>page 1</button>
            <button onClick={()=>setPage(2)}>page </button>
            <button onClick={()=>setPage(3)}>page 3</button>
            <button onClick={()=>setPage(4)}>page 4</button>

            {status==="success"  && <PlanetsList list={data.results} title={"All Planets"}  /> }
        </div>
     );
}
 
export default Planets;