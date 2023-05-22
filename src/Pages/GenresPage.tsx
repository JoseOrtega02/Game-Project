import React, { Suspense, useEffect, useState, useTransition } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchData } from '../Hooks/renderAsFetch'
import GameCard from '../Components/GameCard'
import { ButtonGeneric, PageStyled } from '../styledComponents/PageStyled'
import { CardContainer } from '../styledComponents/CardContainer'
import useFetch from '../Hooks/useFetch'

  

 
  
function GenresPage() {
  const id = window.location.pathname.split("/")[2]
  const { data, loading, error, Refetch } = useFetch({url:`https://api.rawg.io/api/games?genres=${id}&key=c54aa861de274d579731eebf68f91d4b`});
  
  const location = useLocation()
  return (
    <div>
      <h1>{location.state.name}</h1>
      
        
          <CardContainer>
          {error && <h4>an Error ocurred</h4>}
            {loading && <h4>Loading...</h4>}
          {data?.results.map((result:any) =>
            {return <GameCard key={result.id} name={result.name} id={result.id} background_image={result.background_image} rating={result.rating} />})}
       </CardContainer>
        
      
      <PageStyled>
      
      <a href="#home"><ButtonGeneric onClick={()=>{
        if(data?.previous !== null){
         
        Refetch(data?.previous)
        
        }
        
      }}>prev</ButtonGeneric></a>
      <a href="#home"><ButtonGeneric onClick={()=>{
        
        Refetch(data?.next)
        
      }}>next</ButtonGeneric></a>
      </PageStyled>

    </div>
  )
}

export default GenresPage