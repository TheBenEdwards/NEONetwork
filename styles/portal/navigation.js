import styled from 'styled-components'
import { RelSize } from '../mixins'
import theme from '../theme'

export const NavBar = styled.div`
    display: flex;
    background-color: ${theme.blue};
    width: 100%;
    padding: ${RelSize(3,2)};
    border-radius: ${RelSize(1,1)};
    justify-content: center;
`;

export const NavItem = styled.div`
    margin: 0px ${RelSize(2,1)} 0px ${RelSize(2,1)};
    text-transform: uppercase;
    transition: all ease-in 0.2s;
    :hover {
        color: white;
        background-color: ${theme.black};
    }
`;