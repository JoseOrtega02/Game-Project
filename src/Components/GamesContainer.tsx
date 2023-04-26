import React from 'react'
import GameCard from './GameCard'
import { CardContainer } from '../styledComponents/CardContainer'

function GamesContainer() {
  return (
    <CardContainer>
      <GameCard/>
      <GameCard/>
      <GameCard/>
      <GameCard/>
      <GameCard/>
    </CardContainer>
  )
}

export default GamesContainer