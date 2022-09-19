import {useQuery, useQueryClient} from "react-query"
import axios from "axios"


const fetchSuperHero=({queryKey})=>{   
  const heroId=queryKey[1]
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

function useSuperHeroData(heroId) {

  const queryClient = useQueryClient() //tem acesso à cache da query mas nao tem acesso aos dados iniciais 
    
  return useQuery(["super-hero", heroId], fetchSuperHero,{
    initialData:()=>{
      const hero = queryClient.getQueryData("super-heroes")?.data?.find(hero=>hero.id===parseInt(heroId))
      if(hero){
        return {  data:hero }
      }else{
        return undefined
      }
    }
  })

}

// const fetchSuperHero=(heroId)=>{
//     return axios.get(`http://localhost:4000/superheroes/${heroId}`)
// }

// function useSuperHeroData(heroId) {
//   return useQuery(["super-hero", heroId], ()=>fetchSuperHero(heroId))
  
// }

export default useSuperHeroData