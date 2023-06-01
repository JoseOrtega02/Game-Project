
import { StyledGameCard } from '../styledComponents/StyledGameCard'
import { Link } from 'react-router-dom'
import { Game } from './gameSample'

interface Props{
  Game: Game
}

function GameCard({Game}:Props) {
  return (
    <StyledGameCard key={Game.id}>
      <div className="card">
        <div className="card__content">
          <Link to={`/games/`+Game.id} state={Game} key={Game.id}>
            <img src={Game.background_image} alt="" />
            <h3>{Game.name}</h3>
            <h4>{Game.rating}</h4>
          </Link>
        </div>
      </div>
      
      
    </StyledGameCard>
  )
}

export default GameCard