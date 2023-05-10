import styled from "styled-components"
import { colors } from "./Colors"

export const GameDetails = styled.div`
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