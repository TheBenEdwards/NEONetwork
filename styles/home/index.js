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
    :hover {
        background-color: ${theme.blue};
    }
`;

export const TextCard = styled.div`
    margin: ${RelSize(10, 2)};
    padding: ${RelSize(3, 2)};
    background-color: ${theme.white};
    width: 100%;
    text-align: center;
    line-height: 1.5;
    font-size: 1.5rem;
    border: 1px solid;
    border-radius: ${RelSize(3, 2)};
    box-shadow: 5px 10px ${theme.black};
    :hover {
        border-color: ${theme.blue};
        box-shadow: 5px 10px ${theme.blue};
    }
`;

export const TextCardField = styled.div`
    text-align: left;
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
    color: white;
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