import {useQueries} from "react-query"
import axios from "axios"

const fetchSuperHero=(heroId)=>{
    // const heroId=queryKey[1]
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
  }


function DynamicParallel({heroIds}) {
    const queryResults =useQueries(
        heroIds.map((id)=>{
            return {
                queryKey:["super-hero", id],
                queryFn: ()=>fetchSuperHero(id)
            }
        })
    )
    console.log(queryResults)
  return (
    <div>DynamicParallel</div>
  )
}

export default DynamicParallel