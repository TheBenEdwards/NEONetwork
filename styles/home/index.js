import styled from 'styled-components';
import { RelSize } from '../mixins';

export const Container = styled.div`
    background-color: ${props => props.theme.black};
    background-image: url('/static/backgrounds/water.jpeg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Logo = styled.div`
    img {
        height: 1em;
    };
`;

export const TitleContainer = styled.div`
    position: sticky;
    top: 50px;
    width: ${RelSize(21, 1)};
    margin: ${RelSize(5, 2)};
`;

export const SideContainer = styled.div`
    display: flex;
    justify-content: space-between;
    > div {
        width: ${props => (1/(props.size+0.5))*100}%;
    }
`;