import React, { useState } from 'react'
import { game } from '../Components/gameSample'
import { ButtonGeneric } from '../styledComponents/PageStyled'
import { GameDetails } from '../styledComponents/GameDetail'
import { Button } from '../styledComponents/StyledButton'



function GameDetail() {
  const [itsOpen,setOpen] = useState(false)

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
        <img src={game.background_image} alt="" />
      <h4>{game.rating}/{game.rating_top}</h4>
      </div>
      <h1>{game.name}</h1>
      <div dangerouslySetInnerHTML={{__html: game.description}} id='ps'></div>
      <ButtonGeneric onClick={() => {
        setOpen(!itsOpen)
        showmore()}}>{itsOpen?("Show more"):("Show less")}</ButtonGeneric>
    </div>
    <div>
      <h3>Released at {game.released}</h3>
      <h3>Playtime: {game.playtime}hrs</h3>
    </div>
    <div>
      <ButtonGeneric>Metacritic: {game.metacritic} +</ButtonGeneric>
      <ButtonGeneric>Reddit +</ButtonGeneric>
    </div>
    <h3>Genres:</h3>
    <div>
      {game.genres.map(genres =><h4>{genres.name}</h4> )}
    </div>
    <h3>Tags:</h3>
    <div>
      {game.tags.map(tag =><h4>{tag.name}</h4> )}
    </div>
    </GameDetails>
  )
}

export default GameDetail