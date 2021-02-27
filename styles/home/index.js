import styled from 'styled-components'
import { RelSize } from '../mixins'
import theme from '../theme'

export const Container = styled.div`
    padding: ${RelSize(3, 2)};
`;

export const Main = styled.main`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    margin: 0;
    padding: ${RelSize(1, 2)};
    line-height: 1.15;
    font-size: 4rem;
    text-align: center;
    color: ${theme.white};
    background-color: ${theme.black};
    transition: 0.25s;
    :hover {
        background-color: ${theme.blue};
    }
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
    color: ${theme.white};;
    background-color: ${theme.white};
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