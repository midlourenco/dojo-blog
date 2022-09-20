import React from 'react'
import { Link } from "react-router-dom"

function HeroesList({list,...props}) {
  return (
    <div>
    {list?.data.map((hero)=>{
        return (
            <div className="blog-preview" key={hero.id}>
                <Link to={`/rqsuperheroes/${hero.id}`}>
                    {hero.name}
                </Link>
            </div>
        )
    })}

    </div>
  )
}

export default HeroesList