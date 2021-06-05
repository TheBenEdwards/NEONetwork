import styled from 'styled-components';
import { RelSize } from '../mixins';

export const NavBar = styled.div`
    display: flex;
    position: fixed;
    background-color: ${props => props.theme.blue};
    width: 100%;
    justify-content: center;
`;

export const NavItem = styled.div`
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    transition: all ease-in 0.2s;
    flex: 1;
    padding: ${RelSize(1,1)} 0;
    :hover {
        color: white;
        background-color: ${props => props.theme.black};
    }
`;