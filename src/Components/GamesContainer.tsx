import React, { useEffect, useState } from 'react'
import GameCard from './GameCard'
import { CardContainer } from '../styledComponents/CardContainer'
import useFetch from '../Hooks/useFetch'
import { ButtonGeneric, PageStyled } from '../styledComponents/PageStyled'




function GamesContainer() {

  const {data,error,loading,Refetch} = useFetch({url:"https://api.rawg.io/api/games?key=c54aa861de274d579731eebf68f91d4b"})

  return (<>
    <CardContainer>
      {error && <>{console.log(error)}</>}
      {loading && <>loading</>}
      <div id='home'></div>
      {<>{data?.results?.map(result => {return <GameCard key={result.id} name={result.name} id={result.id} background_image={result.background_image} rating={result.rating} />})}</>}
      
    
    

    </CardContainer>
    <PageStyled>
      
    <ButtonGeneric onClick={()=>{
      if(data?.previous !== null){
        Refetch(data?.previous)
      }
      
    }}>prev</ButtonGeneric>
    <a href="#home"><ButtonGeneric onClick={()=>{
      Refetch(data?.next)
    }}>next</ButtonGeneric></a>
    </PageStyled>
    </>
  )
}

export default GamesContainer