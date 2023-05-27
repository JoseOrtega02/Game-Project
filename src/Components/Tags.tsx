import  { Suspense, useState, useTransition } from 'react'
import { GenreDiv } from '../styledComponents/StyledGenre'
import { fetchData } from '../Hooks/renderAsFetch'
import { Link } from 'react-router-dom'
import { ButtonGeneric, PageStyled } from '../styledComponents/PageStyled'
import { tagsUrl } from '../Routes/Routes'
const key = import.meta.env.VITE_REACT_APP_API_KEY
const tags = fetchData(`${tagsUrl}?key=${key}`)
function Tags() {
    
    
    const [dataraw,setGames] = useState(tags)
  const data = dataraw.read()
    const [isPending,startTransition] = useTransition()
    return (<Suspense fallback={<h4>Loading...</h4>}>
      <h3 style={{marginTop:"30px"}}>Tags:</h3>
      <GenreDiv style={{opacity: isPending ? "0.5":"1"}}> 
        
          
          {data?.results.map((res:any) => (
           <Link to={`tags/${res.id}/${res.name}`} state={res} style={{textDecoration:"none"}} key={res.id}><h4 >{res.name}</h4></Link>
          ))}
         
      </GenreDiv>
      <PageStyled>
      
      <ButtonGeneric onClick={()=>{
        if(data?.previous !== null){
          startTransition(()=>
        setGames(fetchData(data?.previous))
        )
        }
        
      }}>prev</ButtonGeneric>
      <ButtonGeneric onClick={()=>{
        startTransition(()=>
        setGames(fetchData(data?.next))
        )
      }}>next</ButtonGeneric>
      </PageStyled>
      </Suspense> 
    )
  }

export default Tags