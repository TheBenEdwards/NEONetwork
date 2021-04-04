import styled from 'styled-components';
import { RelSize } from '../mixins';

export const HomeContainer = styled.div`
    background-color: ${props => props.theme.white};
    margin: auto 0;
    width: 100%;
    height: 100%;
`;

export const PortalContainer = styled.div`
    background-color: ${props => props.theme.white};
    margin: auto 0;
    padding: ${RelSize(10, 15)};
    width: 100%;
`;