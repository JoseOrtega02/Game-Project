import styled from 'styled-components'
import { colors } from './Colors'

export const SideBar = styled.div`
    position:fixed;
    left:0;
    top: 0;
    height: 90vh;
    padding: 10vh 20px;
    display: flex;
    flex-direction: column;
    background-color: ${colors.primary};
    gap: 20px;
    color: white;
    @media screen and (min-width: 768px) {
        width: 200px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #pageSelected {
        background-color: ${colors.button3}
    }
    a{
        padding: 5px;
        border-radius: 5px;
        text-decoration: none;
        color: ${colors.button2};
        background-color: ${colors.button1};
        width: fit-content;
    }
`