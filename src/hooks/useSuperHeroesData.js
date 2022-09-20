import {useQuery, useMutation, useQueryClient } from "react-query"
// import axios from "axios"
import { request } from "../utils/axios.utils"

const fetchSuperHeroes = ()=>{
    // return  axios.get('http://localhost:4000/superheroes')
    return request({url: "/superheroes"})
}

const addSuperHeroes=(newHero)=>{
    // return  axios.post('http://localhost:4000/superheroes',newHero)
    return request({url: "/superheroes", method: "post", data: newHero})

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
    const queryClient= useQueryClient()
    return useMutation(addSuperHeroes,{
        // onSuccess:(data)=>{
        //     // queryClient.invalidateQueries("super-heroes") //-> dizemos que a lista está desatulizada-> faz refetch da lista toda
        //     queryClient.setQueryData("super-heroes",(oldquerydata)=>{
        //         return {...oldquerydata, data: [...oldquerydata.data, data.data]}
        //     } )
        // }
        onMutate: async (newHero)=>{
            await queryClient.cancelQueries("super-heroes")
            const previousHeroData = queryClient.getQueryData("super-heroes")
            queryClient.setQueryData("super-heroes",(oldquerydata)=>{
                return {...oldquerydata, data: [...oldquerydata.data, {id:oldquerydata?.data?.length +1., ... newHero}]}
            } )
            return{
                previousHeroData,
            }
        },
        onError:(_error,_hero, context )=>{
            queryClient.setQueryData("super-heroes", context.previousHeroData)
        },
        onSettled:()=>{
            queryClient.invalidateQueries("super-heroes") 
        },
    })
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
