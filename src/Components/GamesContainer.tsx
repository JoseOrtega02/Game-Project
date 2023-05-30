import { Pagination } from './Pagination';
import  { Suspense, useState, useTransition } from 'react'
import GameCard from './GameCard'
import { CardContainer } from '../styledComponents/CardContainer'

import { ButtonGeneric, PageStyled } from '../styledComponents/PageStyled'
import { fetchData } from '../Hooks/renderAsFetch'
import { Game } from './gameSample'
import { baseUrl } from '../Routes/Routes'


const key = import.meta.env.VITE_REACT_APP_API_KEY
const games = fetchData(`${baseUrl}/games?key=${key}`)
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
   <Pagination   gamesArr={gamesArr}  startTransition={startTransition} setGames={setGames} fetchData={fetchData}   />
    </Suspense>
    </>
  )
}


   
  export default GamesContainer