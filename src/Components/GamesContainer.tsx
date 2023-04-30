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
      <GameCard/>
      <GameCard/>
      <GameCard/>
      <GameCard/>
      <GameCard/>
    </CardContainer>
  )
}

export default GamesContainer