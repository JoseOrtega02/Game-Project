import { CardContainer } from "../styledComponents/CardContainer"
import { useRef, useState,} from "react"
import { fetchData } from "../Hooks/renderAsFetch"
function SearchPage() {
  return (<>
    <div>
        <input type="text" /> 
        <button>Search</button>
    </div>
    <div className="component">
        <CardContainer>
            <h3>data</h3>    
        </CardContainer>  
    </div>

    </>
  )
}

export default SearchPage