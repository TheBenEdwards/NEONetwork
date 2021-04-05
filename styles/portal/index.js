import styled from 'styled-components';
import { RelSize } from '../mixins';

export const Container = styled.div`
    height: 100%;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

export const Title = styled.div`
    margin: 0;
    padding: ${RelSize(1, 2)};
    line-height: 1.15;
    font-size: 4rem;
    text-align: center;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.black};
    transition: all ease-in 0.2s;
    :hover {
        background-color: ${props => props.theme.blue};
    }
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: ${RelSize(1, 1)} 0px ${RelSize(1, 1)} 0px;
`;

export const Logo = styled.div`
    img {
        height: 1em;
    }
`;

export const Footer = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: ${props => props.theme.white};;
    background-color: ${props => props.theme.white};
    opacity: 50%;
    text-align: center;
    padding: ${RelSize(3, 2)};
    img {
        margin-left: 0.5rem;
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const EventItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${RelSize(4, 1)} ${RelSize(5, 1)} 0px ${RelSize(5, 1)};
    width: 100%;
`;