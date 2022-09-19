import {useQuery} from "react-query"
import axios from "axios"
import useSuperHeroData from "../hooks/useSuperHeroesData"
import { Link } from "react-router-dom"

const fetchSuperHeroes = ()=>{
    return  axios.get('http://localhost:4000/superheroes')
}

function RQSuperHeros() {
    const onSuccess=(data)=>{
        console.log("Perform side effect after data fetching", data)
    }
    const onError=(error)=>{
        console.log("Perform side effect after data fetching error",error)
    }

    const {isLoading, data, isError, error, isFetching, refetch} = useSuperHeroData(onSuccess,onError)

    if(isLoading || isFetching){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }

    console.log({isLoading, isFetching })
    return (
        <>
            <h2>RQSuperHeroes</h2>
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
        </>
  )
}

export default RQSuperHeros