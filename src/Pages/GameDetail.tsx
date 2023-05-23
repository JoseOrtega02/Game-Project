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
  const [itsOpen,setOpen] = useState(false)
  const location = useLocation()
  const Game = location.state
  console.log(Game)
  const screenshots = fetchData(`https://api.rawg.io/api/games/${Game.id}/screenshots?key=c54aa861de274d579731eebf68f91d4b`)
  const trailers = fetchData(`https://api.rawg.io/api/games/${Game.id}/movies?key=c54aa861de274d579731eebf68f91d4b`)
  const showmore = () => {
    const Id = document.getElementById("ps")
    console.log(Id?.children)
    const children = Array.from(Id?.children as HTMLCollectionOf<HTMLElement>)
    
    children?.map(child =>{
      console.log(child)
      if(itsOpen) {
        child.style.height = "100%"
      }else{
        child.style.height = "3rem"
      }
      
    })
    }
  
    
  return (
    <GameDetails>
    <ButtonGeneric>return</ButtonGeneric>
    <div className="principal__container">
      <div>
        <img src={Game.background_image} alt="" />
      <h4>{Game.rating}/{Game.rating_top}</h4>
      </div>
      <h1>{Game.name}</h1>
      {Game.description && (<><div dangerouslySetInnerHTML={{__html: Game.description}} id='ps'></div>
      <ButtonGeneric onClick={() => {
        setOpen(!itsOpen)
        showmore()}}>{itsOpen?("Show more"):("Show less")}</ButtonGeneric></>)}
      
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