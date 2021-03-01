import styled from 'styled-components'
import { RelSize } from '../mixins'
import theme from '../theme'

export const A = styled.a`
    color: ${theme.black};
    text-decoration: none;
    :hover{
        color: ${theme.blue}
    }
`;

export const H1 = styled.h1`
    color: ${theme.black};
`;

export const H2 = styled.h2`
    color: ${theme.black};
`;

export const H3 = styled.h3`
    color: ${theme.black};
    margin: 0;
    @media all and (max-width: 700px) {
        ${props => props.upper &&`
            font-size: ${RelSize(6,10)};
        `}
    }
    ${props => props.upper &&`
        text-transform: uppercase;
        letter-spacing: 3px;
    `}
    ${props => props.title &&`
        color: ${theme.white};
    `}
`;

export const P = styled.p`
    color: ${theme.black};
    font-weight: lighter;
    font-size: ${RelSize(8,10)};
    @media all and (max-width: 700px) {
        ${props => props.upper &&`
            font-size: ${RelSize(6,10)};
        `}
    }
`;