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
`