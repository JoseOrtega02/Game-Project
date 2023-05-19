import React, { Suspense } from 'react'
import { GenreDiv } from '../styledComponents/StyledGenre'
import { fetchData } from '../Hooks/renderAsFetch'


 const genres = fetchData("https://api.rawg.io/api/genres?key=c54aa861de274d579731eebf68f91d4b")
function Genres() {
 
  const data = genres.read()
  return (<Suspense fallback={<h4>Loading...</h4>}>
    <GenreDiv>
      
     
        {data?.results.map((res:any) => (
          <h4 key={res.id}><a href="#">{res.name}</a></h4>
        ))}
       
    </GenreDiv>
    </Suspense> 
  )
}

export default Genres