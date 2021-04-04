import styled from 'styled-components';
import { RelSize } from '../mixins';

export const Card = styled.div`
    margin-bottom: ${RelSize(5, 2)};
    padding: ${RelSize(3, 2)};
    background-color: ${props => props.theme.ContainerBackground};
    backdrop-filter: blur(5px);
    width: 100%;
    text-align: center;
    line-height: 1.5;
    font-size: 1.5rem;
    box-shadow: -2px -2px 12px ${props => props.theme.ShadowTop}, 2px 2px 10px ${props => props.theme.ShadowBottom};
    transition: all ease-in 0.2s;
    overflow: hidden;
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