

import GameCard from '../Components/GameCard'
import { ButtonGeneric, PageStyled } from '../styledComponents/PageStyled'
import { CardContainer } from '../styledComponents/CardContainer'
import useFetch from '../Hooks/useFetch'
import { baseUrl } from '../Routes/Routes'


  

const key = import.meta.env.VITE_REACT_APP_API_KEY
  
function GenresPage() {
  const id = window.location.pathname.split("/")[2]
  const name = window.location.pathname.split("/")[3]
  const { data, loading, error, Refetch } = useFetch({url:`${baseUrl}/games?genres=${id}&key=${key}`});
  
 
  

 
  return (
    <div>
      
      <h1>{name}</h1>
      
        
          <CardContainer id='home'>
          {error && <h4>an Error ocurred</h4>}
            {loading && <h4>Loading...</h4>}
          {data?.results?.map((result:any) => (<GameCard Game={result} />))}
       </CardContainer>
        
      
      <PageStyled>
      
      <><ButtonGeneric onClick={()=>{
        if(data?.previous !== null){
         
        Refetch(data?.previous)
        
        }
        
      }}>prev</ButtonGeneric></>
      <a href="#home"><ButtonGeneric onClick={()=>{
        console.log(data?.next);
        Refetch(data?.next)
        
      }}>next</ButtonGeneric></a>
      </PageStyled>

    </div>
  )
}

export default GenresPage