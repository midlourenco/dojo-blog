import { useState } from "react";
import {Link} from "react-router-dom"


const PeopleList = ({list, title,...props}) => {

    return ( 
        <div className="person-list">
            <h2>People 🧍‍♂️🧍‍♀️ </h2>
            {list && list.map((person)=>(
              <div className="people-preview" key={person.created}>
                <Link to={"people/"+person.created}>
                  <h2>{person.name}</h2>
                </Link>
                <p>Gender: {person.gender}</p>
                <p>Birth year: {person.birth_year}</p>
              </div>  
            ))} 
        </div>
     );
}
 
export default PeopleList;