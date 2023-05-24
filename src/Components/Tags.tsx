import  { Suspense, useState, useTransition } from 'react'
import { GenreDiv } from '../styledComponents/StyledGenre'
import { fetchData } from '../Hooks/renderAsFetch'
import { Link } from 'react-router-dom'
import { ButtonGeneric, PageStyled } from '../styledComponents/PageStyled'

const tags = fetchData("https://api.rawg.io/api/tags?key=c54aa861de274d579731eebf68f91d4b")
function Tags() {
    
    
    const [dataraw,setGames] = useState(tags)
  const data = dataraw.read()
    const [isPending,startTransition] = useTransition()
    return (<Suspense fallback={<h4>Loading...</h4>}>
      <h3 style={{marginTop:"30px"}}>Tags:</h3>
      <GenreDiv>
        
          
          {data?.results.map((res:any) => (
           <Link to={`tags/${res.id}/${res.name}`} state={res} style={{textDecoration:"none"}}><h4 key={res.id}>{res.name}</h4><>{console.log(res)}</></Link>
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