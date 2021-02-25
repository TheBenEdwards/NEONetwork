import styled from 'styled-components'
import { RelSize } from '../mixins'
import theme from '../theme'

export const H1 = styled.h1`

`;

export const H2 = styled.h2`

`;

export const H3 = styled.h3`
    margin: 0;
    ${props => props.upper &&`
        text-transform: uppercase;
        letter-spacing: 3px;
    `}
`;

export const P = styled.p`
    font-weight: lighter;
    font-size: ${RelSize(8,10)};
`;