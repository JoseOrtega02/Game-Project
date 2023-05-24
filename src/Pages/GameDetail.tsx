import React, { Suspense, useState } from 'react'
import { Genre, Tag, game } from '../Components/gameSample'
import { ButtonGeneric } from '../styledComponents/PageStyled'
import { GameDetails } from '../styledComponents/GameDetail'
import { Button } from '../styledComponents/StyledButton'
import Screenshots from '../Components/Screenshots'
import { fetchData } from '../Hooks/renderAsFetch'
import Trailers from '../Components/Trailers'
import { useLocation } from 'react-router-dom'



function GameDetail() {
  
  const location = useLocation()
  const Game = location.state
  console.log(Game)
  const screenshots = fetchData(`https://api.rawg.io/api/games/${Game.id}/screenshots?key=c54aa861de274d579731eebf68f91d4b`)
  const trailers = fetchData(`https://api.rawg.io/api/games/${Game.id}/movies?key=c54aa861de274d579731eebf68f91d4b`)
 
  
    
  return (
    <GameDetails>
    <ButtonGeneric onClick={()=>history.back() } style={{marginTop:"20px",marginLeft:"20px"}} >return</ButtonGeneric>
    <div className="principal__container">
      <div>
        <img src={Game.background_image} alt="" />
      <h4>{Game.rating}/{Game.rating_top}</h4>
      </div>
      <h1>{Game.name}</h1>
      
    </div>
    <div className="text__container">
      <h3>Released at <h3 id='colored__text'>{Game.released}</h3></h3>
      <h3>Playtime: <h3 id='colored__text'>{Game.playtime}</h3>hrs</h3>
    </div>
    <Suspense fallback={<h4>Loading..</h4>}>
        <Screenshots screenshots={screenshots} />
        
        </Suspense>
        <Suspense fallback={<h4>Loading..</h4>}>
          <Trailers trailers={trailers} />
        </Suspense>
    <div className="button__container">
      <ButtonGeneric>Metacritic: {Game.metacritic} +</ButtonGeneric>
      <ButtonGeneric>Reddit +</ButtonGeneric>
    </div>
    <h3>Genres:</h3>
    <div className="map__container">
      {Game.genres.map((genres:Genre) =><h4>{genres.name}</h4> )}
    </div>
    <h3>Tags:</h3>
    <div className="map__container">
      {Game.tags.map((tag:Tag) =><h4>{tag.name}</h4> )}
    </div>
    </GameDetails>
  )
}

export default GameDetail