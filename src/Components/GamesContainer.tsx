import  { Suspense, useState, useTransition } from 'react'
import GameCard from './GameCard'
import { CardContainer } from '../styledComponents/CardContainer'

import { ButtonGeneric, PageStyled } from '../styledComponents/PageStyled'
import { fetchData } from '../Hooks/renderAsFetch'
import { Game } from './gameSample'



const games = fetchData("https://api.rawg.io/api/games?key=c54aa861de274d579731eebf68f91d4b")
function GamesContainer() {

 
  const [data,setGames] = useState(games)
  const gamesArr = data.read()
  const [isPending,startTransition] = useTransition()
  return (<>
    <Suspense fallback={<h4>loading...</h4>}>
    <CardContainer style={{opacity: isPending? 0.5:1 }}>
      
      
      <div id='home'></div>
      {<>{gamesArr?.results?.map((result:Game) => {return <GameCard Game={result} key={result.id}/>})}</>}
    </CardContainer>
    <PageStyled>
      
    <a href="#home"><ButtonGeneric onClick={()=>{
      if(gamesArr?.previous !== null){
        startTransition(()=>
      setGames(fetchData(gamesArr?.previous))
      )
      }
      
    }}>prev</ButtonGeneric></a>
    <a href="#home"><ButtonGeneric onClick={()=>{
      startTransition(()=>
      setGames(fetchData(gamesArr?.next))
      )
    }}>next</ButtonGeneric></a>
    </PageStyled>
    </Suspense>
    </>
  )
}

export default GamesContainer