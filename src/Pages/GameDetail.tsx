import  { Suspense,  } from 'react'
import { Genre, Tag, } from '../Components/gameSample'
import { ButtonGeneric } from '../styledComponents/PageStyled'
import { GameDetails } from '../styledComponents/GameDetail'

import Screenshots from '../Components/Screenshots'
import { fetchData } from '../Hooks/renderAsFetch'
import Trailers from '../Components/Trailers'
import { Link, useLocation } from 'react-router-dom'
import { baseUrl } from '../Routes/Routes'

const key = import.meta.env.VITE_REACT_APP_API_KEY

function GameDetail() {
  
  const location = useLocation()
  const Game = location.state
  const screenshots = fetchData(`${baseUrl}/games/${Game.id}/screenshots?key=${key}`)
  const trailers = fetchData(`${baseUrl}/games/${Game.id}/movies?key=${key}`)
  const tags = Game.tags.filter((tag:Tag) => tag.language === 'eng')
  
    
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
      {Game.genres.map((genres:Genre) =><Link to={`/genre/${genres.id}/${genres.name}`} relative={`/genre/${genres.id}/${genres.name}`} state={genres} style={{textDecoration:"none"}}><h4 key={genres.id}>{genres.name}</h4></Link> )}
    </div>
    <h3>Tags:</h3>
    <div className="map__container">
      
      {tags.map((tag:Tag) =><Link to={`/tags/${tag.id}/${tag.name}`} relative={`/tags/${tag.id}/${tag.name}`} state={tag} style={{textDecoration:"none"}}><h4 key={tag.id}>{tag.name}</h4></Link> )}
    </div>
    </GameDetails>
  )
}

export default GameDetail