import React from 'react'
import { StyledGameCard } from '../styledComponents/StyledGameCard'
import { Link } from 'react-router-dom'

interface Props{
  id:number,
  name: string,
  background_image: string,
  rating: number
}

function GameCard({id,name,background_image,rating}:Props) {
  return (
    <StyledGameCard>
      <Link to={`/games/`+id}>
        <img src={background_image} alt="" />
        <h3>{name}</h3>
        <h4>{rating}</h4>
      </Link>
      
    </StyledGameCard>
  )
}

export default GameCard