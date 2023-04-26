import styled from "styled-components";
import { colors } from "./Colors";
export const StyledGameCard = styled.div`
   background-color: ${colors.button2};
   padding: 5px;
   border-radius: 5px;
   a{
        
        
        img{
            width:100%;
            max-width: 500px;
        }
        text-decoration: none;
        color: white;
        text-align: center;
        h3,h4{
            margin: 0px;
        }
        h4{
            background-color: ${colors.button1};
            width: fit-content;
            margin-left: auto;
            margin-right: auto;
            padding: 5px;
            color: ${colors.primary};
            border-radius: 50%;
        }
    }

`