import React from 'react'
import { Link } from 'react-router-dom'

function ListFooter({numberOfResults, ...props}) {
  return (
    <div className="list-footer">
    <p data-testid="para" >Total: {numberOfResults === 0 ? "there is any result to show" : numberOfResults} {numberOfResults > 1 ? "results" : "result"}</p>
    <Link to="/people">Followers</Link>
</div>
  )
}

export default ListFooter