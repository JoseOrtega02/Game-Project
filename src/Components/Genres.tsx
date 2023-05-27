import  { Suspense } from 'react'
import { GenreDiv } from '../styledComponents/StyledGenre'
import { fetchData } from '../Hooks/renderAsFetch'
import { Link } from 'react-router-dom'
import { genresUrl } from '../Routes/Routes'

 const key = import.meta.env.VITE_REACT_APP_API_KEY
 const genres = fetchData(`${genresUrl}?key=${key}`)
function Genres() {
 
  const data = genres.read()
  
  return (<Suspense fallback={<h4>Loading...</h4>}>
    <h3 style={{marginTop:"30px"}}>Genres:</h3>
    <GenreDiv>
      
        
        {data?.results.map((res:any) => (
         <Link to={`genre/${res.id}/${res.name}`} state={res} style={{textDecoration:"none"}} key={res.id}><h4 >{res.name}</h4></Link>
        ))}
       
    </GenreDiv>
    </Suspense> 
  )
}

export default Genres