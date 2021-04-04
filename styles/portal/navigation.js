import styled from 'styled-components';
import { RelSize } from '../mixins';

export const NavBar = styled.div`
    display: flex;
    position: fixed;
    background-color: ${props => props.theme.blue};
    width: 95%;
    border-radius: ${RelSize(1,1)};
    justify-content: center;
`;

export const NavItem = styled.div`
    cursor: pointer;
    margin: 0px ${RelSize(2,1)} 0px ${RelSize(2,1)};
    text-transform: uppercase;
    transition: all ease-in 0.2s;
    padding: ${RelSize(1,1)};
    :hover {
        color: white;
        background-color: ${props => props.theme.black};
    }
`;