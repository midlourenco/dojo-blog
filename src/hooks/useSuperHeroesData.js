import {useQuery, useMutation } from "react-query"
import axios from "axios"

const fetchSuperHeroes = ()=>{
    return  axios.get('http://localhost:4000/superheroes')
}


const addSuperHeroes=(newHero)=>{
    return  axios.post('http://localhost:4000/superheroes',newHero)

}

function useSuperHeroesData(onSuccess,onError) {

    return useQuery(
        "super-heroes",
        fetchSuperHeroes,
        {
            onSuccess, 
            onError,
        })

}


export const useAddSuperHeroData =()=>{
    return useMutation(addSuperHeroes)
}

export default useSuperHeroesData

        //várias opções que se podem passar dentro do terceiro argumento:
    // return useQuery(
    //     "super-heroes",
    //     fetchSuperHeroes,
    //     {
    //         // cacheTime:5000,
    //         // staleTimxe: 0,\
    //         // refetchOnMount:false,
    //         // refetchOnMount:"always"
    //         // refetchInterval: 2000,
    //         // refetchIntervalInBackground: true,
    //         // enabled:false,

    //         //default:
    //         // refetchOnMount: true,
    //         // refetchOnWindowFocus:true,
           
    //         onSuccess, 
    //         onError,
    //         // select:(data)=>{
    //         //     const superHeroNames=data.data.map((hero)=>hero.name)
    //         //     return superHeroNames
    //         // }
           
    //     })
