import styled from 'styled-components'
import { RelSize } from '../mixins'
import theme from '../theme'

export const Card = styled.div`
    margin: ${RelSize(5, 2)};
    padding: ${RelSize(3, 2)};
    background-color: ${theme.white};
    width: 100%;
    text-align: center;
    line-height: 1.5;
    font-size: 1.5rem;
    border: 1px solid;
    border-radius: ${RelSize(3, 2)};
    box-shadow: 5px 10px ${theme.black};
    transition: all ease-in 0.2s;
    overflow: hidden;
    :hover {
        border-color: ${theme.blue};
        box-shadow: 5px 10px ${theme.blue};
    }
`;

export const Header = styled.div`
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 3px;
`;

export const Text = styled.div`
    text-align: left;
    font-weight: lighter;
    font-size: ${RelSize(8,10)};
`;