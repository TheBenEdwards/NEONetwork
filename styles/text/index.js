import styled from 'styled-components';
import { RelSize } from '../mixins';

export const A = styled.a`
    text-decoration: none;
    :hover{
        color: ${props => props.theme.blue}
    }
`;

export const H1 = styled.h1`

`;

export const H2 = styled.h2`

`;

export const H3 = styled.h3`
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
`;

export const P = styled.p`
    font-weight: lighter;
    font-size: ${RelSize(8,10)};
    @media all and (max-width: 700px) {
        ${props => props.upper &&`
            font-size: ${RelSize(6,10)};
        `}
    }
`;