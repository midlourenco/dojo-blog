import { useState } from "react"
import {useQuery} from "react-query"
// import axios from "axios"
import { request } from "../utils/axios.utils"
import useSuperHeroData, {useAddSuperHeroData} from "../hooks/useSuperHeroesData"

import AddHeroInput from "../components/AddHeroInput/AddHeroInput"
import HeroesList from "../components/HeroesList"

// const fetchSuperHeroes = ()=>{
//     return  axios.get('http://localhost:4000/superheroes')
// }

function RQSuperHeros() {

    const onSuccess=(data)=>{
        console.log("Perform side effect after data fetching", data)
    }
    const onError=(error)=>{
        console.log("Perform side effect after data fetching error",error)
    }

    const {isLoading, data:heroes, isError, error, isFetching, refetch} = useSuperHeroData(onSuccess,onError)


    if(isLoading || isFetching){
        return <h2>Loading...</h2>
    }
    if(isError ){
        return <h2>{error.message}</h2>
    }

    console.log({isLoading, isFetching })
    return (
        <div className="blog-list-container">
            <h2>RQSuperHeroes</h2>
            <AddHeroInput />

            <button onClick={refetch}>Fetch heroes</button>
            <HeroesList list={heroes}/>
            {/* {data.map((heroName)=>{
                return <div key={heroName}>{heroName}</div>
            })} */}
        </div>
  )
}

export default RQSuperHeros