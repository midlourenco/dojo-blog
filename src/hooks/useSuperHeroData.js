import {useQuery} from "react-query"
import axios from "axios"


const fetchSuperHero=({queryKey})=>{
  const heroId=queryKey[1]
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

function useSuperHeroData(heroId) {
return useQuery(["super-hero", heroId], fetchSuperHero)

}

// const fetchSuperHero=(heroId)=>{
//     return axios.get(`http://localhost:4000/superheroes/${heroId}`)
// }

// function useSuperHeroData(heroId) {
//   return useQuery(["super-hero", heroId], ()=>fetchSuperHero(heroId))
  
// }

export default useSuperHeroData