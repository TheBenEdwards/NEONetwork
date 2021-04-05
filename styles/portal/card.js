import styled from 'styled-components';
import { RelSize } from '../mixins';

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: ${RelSize(1, 1)};
    height: ${RelSize(5, 1)};
    box-shadow: -2px -2px 12px ${props => props.theme.ShadowTop}, 2px 2px 10px ${props => props.theme.ShadowBottom};
    cursor: pointer;
`;

export const Banner = styled.div`
    height: 50%;
    width: ${RelSize(1, 5)};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    ${props => props.type === 'text' &&`
        background-color: ${props.theme.blue}
    `}
    ${props => props.type === 'event' &&`
        background-color: ${props.theme.green}
    `}
    ${props => props.type === 'profile' &&`
        background-color: ${props.theme.red}
    `}
`;

export const DataContainer = styled.div`
    margin: 0px ${RelSize(1, 1)};
`;

export const PostTitle = styled.div`
    text-transform: uppercase;
    font-weight: 200;
`;

export const PostType = styled.div`
    font-size: ${RelSize(3, 5)};
    text-transform: uppercase;
    font-weight: 200;
    ${props => props.type === 'text' &&`
        color: ${props.theme.blue}
    `}
    ${props => props.type === 'event' &&`
        color: ${props.theme.green}
    `}
    ${props => props.type === 'profile' &&`
        color: ${props.theme.red}
    `}
`;

export const PostName = styled.div`
    text-transform: uppercase;
    font-weight: 500;
`;

export const PostDate = styled.div`
    font-size: ${RelSize(3, 4)};
    text-transform: uppercase;
    font-weight: 200;
`;