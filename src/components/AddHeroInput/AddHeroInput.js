import { useState } from "react"
import { useAddSuperHeroData } from "../../hooks/useSuperHeroesData"

function AddHeroInput() {
  const [heroName, setHeroName]=useState("")
  const [heroEgo, setHeroEgo]=useState("")


  const {mutate: addHero, isLoading: isLoadingOnAdding, isError: isErrorOnAdding,error: errorOnAdding} = useAddSuperHeroData()

  const handleAddHeroClick=(e)=>{
      // e.preventDefault();
      // console.log(heroName, heroEgo )
      const newHero = {name: heroName, alterEgo: heroEgo}
      addHero(newHero)
      setHeroName("")
      setHeroEgo("")
      }



  return (
    <div className="input-container"> 
      <div>
        <label htmlFor="heroName">Hero name:</label>
        <input 
      className="input" 
      id="heroName" 
      type="text"
      placeholder="Add hero name here"
      value={heroName}
      onChange={(e)=>setHeroName(e.target.value)}
      />
  
      </div>
      <div>
   
      <label htmlFor="heroSuperEgo">Hero super ego:</label>
        
      <input 
      className="input" 
      id="heroSuperEgo" 
      type="text"
      placeholder="Add hero alter ego here"
      value={heroEgo}
      onChange={(e)=>setHeroEgo(e.target.value)}
      />
      </div>
      <button
      className="add-btn"
      onClick={(e)=>handleAddHeroClick(e)} 
      disabled={isLoadingOnAdding || (!heroName.trim() || !heroEgo.trim())}
      > 
        {isLoadingOnAdding? "Please, wait while adding new hero" :"Add Hero"}
      </button>

      {isErrorOnAdding && <p style={{color:"red"}}>{errorOnAdding.message}</p>}

    </div>
  )
}

export default AddHeroInput
