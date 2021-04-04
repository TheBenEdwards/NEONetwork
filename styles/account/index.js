import styled from 'styled-components';
import { RelSize } from '../mixins';

export const AccountContainer = styled.div`
    position: relative;
    padding: ${RelSize(3, 2)};
    width: ${RelSize(25, 1)};
    background-color: ${props => props.theme.ContainerBackground};
    backdrop-filter: blur(5px);
`;

export const StickyContainer = styled.div`
    position: sticky;
    top: 10%;
`;

export const Title = styled.div`
    margin: 0;
    padding: ${RelSize(1, 2)};
    line-height: 1.15;
    font-size: 4rem;
    text-align: center;
    background-color: ${props => props.theme.black};
    transition: all ease-in 0.2s;
    text-transform: uppercase;
    font-weight: 700;
    box-shadow: -2px -2px 12px ${props => props.theme.ShadowTop}, 2px 2px 10px ${props => props.theme.ShadowBottom};
    :hover {
        background-color: ${props => props.theme.blue};
    }
`;

export const AccountTitle = styled.div`
    text-transform: uppercase;
    border-left: 2px solid ${props => props.theme.white};
    padding: ${RelSize(1, 2)};
`;

export const AccountForm = styled.div`
    background-color: ${props => props.theme.black};
    border-left: 2px solid ${props => props.theme.white};
    padding: ${RelSize(1, 2)};
    box-shadow: -2px -2px 12px ${props => props.theme.ShadowTop}, 2px 2px 10px ${props => props.theme.ShadowBottom};
`;

export const Subtitle = styled.div`
    color: ${props => props.theme.grey};
    font-size: ${RelSize(3, 2)};
    text-transform: uppercase;
    ${props => props.small &&`
        font-size: ${RelSize(1, 1)};
    `}
`;

export const Inputform = styled.div`
    padding-top: ${RelSize(1, 1)};
`;

export const ButtonForm = styled.div`
    display: flex;
    flex-direction: row;
    padding: ${RelSize(3, 2)} 0px ${RelSize(3, 4)} 0px;
    justify-content: space-between;
`;

export const ForgotButton = styled.div`
    font-size: 15px;
    font-weight: 200;
    color: ${props => props.theme.grey};
    cursor: pointer;
`;

export const CreateForm = styled.div`
    padding: ${RelSize(5, 2)} 0px;
    cursor: pointer;
`;

export const HelpForm = styled.div`
    cursor: pointer;
`;