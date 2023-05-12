import styled from "styled-components"
import { colors } from "./Colors"

export const GameDetails = styled.div`
    .text__container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top:20px;
        h3{
            display:flex;
            gap:5px
        }
         #colored__text{
          
            color: ${colors.button3};
        }
    }

    .button__container{
        display: flex;
        flex-direction: row;
        justify-content:space-around;
        margin-top:20px;
        margin-bottom: 20px;
    }
    .map__container{
        width:90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 10px;
        margin-left: auto;
        margin-right: auto;
        gap: 10px;
        margin-top:20px;
        h4{
            background-color: ${colors.button3};
            border-radius:10px;
            padding: 5px;
            color: ${colors.primary}
        }
    }

    .principal__container{
        text-align: center;
        div{
            text-align: center;
            margin-top:30px;
            img{
            width:90%;
        }
        h4{
            background-color: ${colors.button1};
            padding: 5px;
            border-radius: 50px;
            width: min-content;
            color: ${colors.primary};
            margin:  10px auto;
        }
        p{
            padding: 5px;
            overflow: hidden;
            height: 3rem;
            margin-bottom: 15px;
        }
        }
        h1{
            text-align: center;
        }
    }
`