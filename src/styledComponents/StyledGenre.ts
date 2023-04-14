import styled from "styled-components";
import { colors } from "./Colors";
export const GenreDiv = styled.div`
    display: flex;
    gap: 20px;
    width: 90vw;
    overflow-x: scroll;
    margin-left: auto;
    margin-right: auto;
    h4{
        background-color: ${colors.button2};
        padding: 5px 10px;
        border-radius: 5px;
        a{
            color: ${colors.button1};
            text-decoration: none;
        }
    }
`