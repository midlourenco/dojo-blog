import {useQuery} from "react-query"
import axios from "axios"

const fetchSuperHeroes = ()=>{
    return  axios.get('http://localhost:4000/superheroes')
}

function useSuperHeroesData(onSuccess,onError) {

    return useQuery(
        "super-heroes",
        fetchSuperHeroes,
        {
            // cacheTime:5000,
            // staleTimxe: 0,\
            // refetchOnMount:false,
            // refetchOnMount:"always"
            // refetchInterval: 2000,
            // refetchIntervalInBackground: true,
            // enabled:false,

            //default:
            // refetchOnMount: true,
            // refetchOnWindowFocus:true,
           
            onSuccess, 
            onError,
            // select:(data)=>{
            //     const superHeroNames=data.data.map((hero)=>hero.name)
            //     return superHeroNames
            // }
           
        })

}

export default useSuperHeroesData