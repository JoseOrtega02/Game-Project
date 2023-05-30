import { ButtonGeneric, PageStyled } from "../styledComponents/PageStyled";
import { Game } from "./gameSample";



interface Props  {
    gamesArr: {
      previous: string
      next: string
      results:Game[]
    },
    startTransition:Function,
    setGames: Function,
    fetchData:Function,
}

export function Pagination(props: Props) {
  const {gamesArr,startTransition,setGames,fetchData} = props
  return <PageStyled>
      
    <a href="#home"><ButtonGeneric onClick={() => {
        if (gamesArr?.previous !== null) {
          startTransition(() => setGames(fetchData((gamesArr?.previous))));
        }
      }}>prev</ButtonGeneric></a>
    <a href="#home"><ButtonGeneric onClick={() => {
        startTransition(() => setGames(fetchData((gamesArr?.next))));
      }}>next</ButtonGeneric></a>
    </PageStyled>;
}
  