import React from 'react'
import GameCard from './GameCard'
import { CardContainer } from '../styledComponents/CardContainer'
import useFetch from '../Hooks/useFetch'



function GamesContainer() {

  const {data,error,loading} = useFetch({url:"https://api.rawg.io/api/games?key=c54aa861de274d579731eebf68f91d4b"})

  return (
    <CardContainer>
      {error && <>{console.log(error)}</>}
      {loading && <>loading</>}
      {<>{console.log(data)}</>}
      {data && <>{data?.results?.map(result => {return <GameCard key={result.id} name={result.name} id={result.id} background_image={result.background_image} rating={result.rating} />})}</>}
      
    <div>
      <a href="">prev</a>
    <h5>1</h5>
    <a href="">next</a>
    </div>
    

    </CardContainer>
  )
}

export default GamesContainer