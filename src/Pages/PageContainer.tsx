import { useTransition } from "react";
import GameCard from "../Components/GameCard";
import { Pagination } from "../Components/Pagination";
import { Game } from "../Components/gameSample";
import { fetchData } from "../Hooks/renderAsFetch";
import { CardContainer } from "../styledComponents/CardContainer";


interface Props{
        read:Function 
}
    



function PageContainer(props:{data:Props,setdata:Function}) {
  const result = props.data?.read()
  const [ispendig,startTransition] = useTransition()
    return (
    <div>
        <h2>Results :</h2>
        <CardContainer style={{opacity: ispendig ? "0.5":"1"}}>
            <>{result.results.map((res:Game) => <GameCard Game={res} key={res.id}/>)}</> 
        </CardContainer>
        <Pagination gamesArr={result} setGames={props.setdata} fetchData={fetchData} startTransition={startTransition}/>
    </div>
  )
}

export default PageContainer