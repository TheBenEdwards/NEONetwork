import styled from 'styled-components'
import { RelSize } from '../mixins'
import theme from '../theme'

export const Container = styled.div`
    padding: ${RelSize(3,2)};
`;

export const Main = styled.main`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.footer`
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        margin-left: 0.5rem;
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Title = styled.h1`
    margin: 0;
    padding: ${RelSize(1,2)};
    line-height: 1.15;
    font-size: 4rem;
    text-align: center;
    color: ${theme.white};
    background-color: ${theme.black};
`;

export const TextCard = styled.div`
    margin: ${RelSize(10,2)};
    padding: ${RelSize(3,2)};
    background-color: ${theme.white};
    width: 100%;
    text-align: center;
    line-height: 1.5;
    font-size: 1.5rem;
`;

export const TextCardField = styled.div`
    text-align: left;
`;

export const Logo = styled.div`
    img {
        height: 1em;
    }
`;