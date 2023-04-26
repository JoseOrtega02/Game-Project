import styled from "styled-components";

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    justify-content: center;
    text-align: center;
    padding: 5px;
    margin-top: 20px;
    @media screen and (min-width:450px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width:850px) {
        grid-template-columns: 1fr 1fr 1fr;
        padding: 10px;
    }
`