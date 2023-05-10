import styled from "styled-components";
import { colors } from "./Colors";

export const ButtonGeneric = styled.button`
background-color: ${colors.button1};
        padding: 5px;
        border: none;
        &:hover {
            cursor: pointer;
            background-color: rgb(210 161 2);
        }
`

export const PageStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
` 