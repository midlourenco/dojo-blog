import { useState } from "react"
import {useQuery} from "react-query"
// import axios from "axios"
import { request } from "../utils/axios.utils"
import useSuperHeroData, {useAddSuperHeroData} from "../hooks/useSuperHeroesData"
import { Link } from "react-router-dom"

// const fetchSuperHeroes = ()=>{
//     return  axios.get('http://localhost:4000/superheroes')
// }

function RQSuperHeros() {
    const [heroName, setHeroName]=useState("")
    const [heroEgo, setHeroEgo]=useState("")

    const onSuccess=(data)=>{
        console.log("Perform side effect after data fetching", data)
    }
    const onError=(error)=>{
        console.log("Perform side effect after data fetching error",error)
    }

    const {isLoading, data, isError, error, isFetching, refetch} = useSuperHeroData(onSuccess,onError)

    const {mutate: addHero, isLoading: isLoadingOnAdding, isError: isErrorOnAdding,error: errorOnAdding} = useAddSuperHeroData()

    const handleAddHeroClick=(e)=>{
     e.preventDefault();
    // console.log(heroName, heroEgo )
    const newHero = {name: heroName, alterEgo: heroEgo}
    addHero(newHero)
    setHeroName("")
    setHeroEgo("")
    }

    if(isLoading || isFetching){
        return <h2>Loading...</h2>
    }
    if(isError ){
        return <h2>{error.message}</h2>
    }

    console.log({isLoading, isFetching })
    return (
        <div>
            <h2>RQSuperHeroes</h2>
            <div> 
                <label htmlFor="heroName">Hero name:</label>
                <input 
                id="heroName" 
                type="text"
                value={heroName}
                onChange={(e)=>setHeroName(e.target.value)}
                />
                <label htmlFor="heroSuperEgo">Hero super ego:</label>
                <input 
                id="heroSuperEgo" 
                type="text"
                value={heroEgo}
                onChange={(e)=>setHeroEgo(e.target.value)}
                />
                <button onClick={(e)=>handleAddHeroClick(e)} disabled={isLoadingOnAdding}> {isLoadingOnAdding? "Adding New Hero" :"Add Hero"}</button>
                {isErrorOnAdding && <p style={{color:"red"}}>{errorOnAdding.message}</p>}

            </div>

            <button onClick={refetch}>Fetch heroes</button>
            {data?.data.map((hero)=>{
                return (
                    <div key={hero.id}>
                        <Link to={`/rqsuperheroes/${hero.id}`}>
                            {hero.name}
                        </Link>
                    </div>
                )
            })}
            {/* {data.map((heroName)=>{
                return <div key={heroName}>{heroName}</div>
            })} */}
        </div>
  )
}

export default RQSuperHeros