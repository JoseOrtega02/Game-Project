import React from 'react'
import { StyledGameCard } from '../styledComponents/StyledGameCard'

interface Props{
  id:number,
  name: string,
  background_image: string,
  rating: number
}

function GameCard({id,name,background_image,rating}:Props) {
  return (
    <StyledGameCard>
      <a href="#">
        <img src={background_image} alt="" />
        <h3>{name}</h3>
        <h4>{rating}</h4>
      </a>
      
    </StyledGameCard>
  )
}

export default GameCard