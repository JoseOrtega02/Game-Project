import styled from "styled-components";
import { colors } from "./Colors";

export const FooterStyled = styled.div`
    background-color: ${colors.primary};
    margin-top: 50px;
    height: 100px;
    display: flex;
    justify-content:space-around;
    align-items: center;
    padding: 10px;
    h3{
        width: fit-content;
    }
`