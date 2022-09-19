import React from 'react'
import { useParams } from 'react-router-dom'
import useSuperHeroData from '../hooks/useSuperHeroData'

function RQSuperHeroDetails() {

  const {id}= useParams()
  const {isLoading, data, isError, error, isFetching} = useSuperHeroData(id)


  if(isLoading || isFetching){
    return <h2>Loading...</h2>
}
if(isError){
    return <h2>{error.message}</h2>
    
}


  return (
    
    <>
      <h2>Super Hero Details</h2>
      <div>{data?.data.name} - {data?.data.alterEgo}</div>
    </>
  )
}

export default RQSuperHeroDetails