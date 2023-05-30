
import  { Suspense, useRef, useState,} from "react"
import { fetchData } from "../Hooks/renderAsFetch"
import { baseUrl } from "../Routes/Routes"
import PageContainer from "./PageContainer"

function SearchPage() {
  const [data,setData] = useState<any>()
  
  const inputvalue = useRef<HTMLInputElement>(null)
   function  handleSearch() {
    if(inputvalue.current?.value !== "") {
      
      const result = fetchData(`${baseUrl}/games?search=${inputvalue.current?.value}&key=${import.meta.env.VITE_REACT_APP_API_KEY}`)
    setData(result)
    }
    if(inputvalue.current){
      inputvalue.current.value =""
    }
  }
  function handleKeypress (e: React.KeyboardEvent)  {
  if (e.key === "Enter") {
    
    handleSearch();
  }
};
  return (<>
    <div>
        <input type="text" ref={inputvalue} required onKeyDown={handleKeypress}/> 
        <button onClick={() => handleSearch()} >Search</button>
    </div>
    <div className="component">
      <Suspense fallback={<h4>Loading...</h4>}>
        <PageContainer data={data} setdata={setData}/>
      </Suspense>
      
         
    </div>

    </>
  )
}

export default SearchPage