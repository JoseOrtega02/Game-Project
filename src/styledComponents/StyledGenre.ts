import styled from "styled-components";
import { colors } from "./Colors";
export const GenreDiv = styled.div`
    display: flex;
    gap: 20px;
    width: 90vw;
    overflow-x: scroll;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    padding: 10px;
    @media screen and (min-width: 768px) {
        justify-content: center;
        overflow-x: hidden;
    }
    h4{
        background-color: ${colors.button2};
        padding: 5px 10px;
        border-radius: 5px;
        text-align: center;
        display: flex;
    align-items: center;
        a{
            color: ${colors.button1};
            text-decoration: none;
        }
    }
`