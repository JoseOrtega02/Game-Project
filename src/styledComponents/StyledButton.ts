import styled from "styled-components";
import { colors } from "./Colors";

export const Button = styled.button`
background-color: ${colors.button1};
border: none;
padding: 5px 10px;
color: black;
font-size: 18px;
position: fixed;
top: 10px;
right: 10px;
&:hover {
    cursor: pointer;
}
`