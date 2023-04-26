import React from 'react'
import { StyledGameCard } from '../styledComponents/StyledGameCard'
function GameCard() {
  return (
    <StyledGameCard>
      <a href="#">
        <img src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg" alt="" />
        <h3>Grand Theft Auto V</h3>
        <h4>4.5</h4>
      </a>
      
    </StyledGameCard>
  )
}

export default GameCard