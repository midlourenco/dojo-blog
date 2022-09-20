import { useState } from "react";
import {Link} from "react-router-dom"
import Header from "./Header/Header";


const PlanetsList = ({list, title,...props}) => {

    return ( 
        <div className="planet-list">
          <Header title="Planets  🪐 " />
            {/* <h2>Planets 🪐 </h2> */}
            {list && list.map((planet)=>(
              <div className="planet-preview" key={planet.created}>
                <Link to={"planets/"+planet.created}>
                  <h2>{planet.name}</h2>
                </Link>
                <p>Terrain: {planet.terrain}</p>
              </div>  
            ))} 
        </div>
     );
}
 
export default PlanetsList;