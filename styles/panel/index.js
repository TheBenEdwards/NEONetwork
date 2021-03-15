import styled from 'styled-components';
import { RelSize } from '../mixins'
import theme from '../theme'

export const PanelMain = styled.div`
    position: relative;
    color: white;
    height: ${RelSize(40, 1)};    
    display: flex;
    border-radius: 10px;
    z-index: 1;
    @media all and (max-width: 700px) {
        display: none;
    }
    ${props => props.portal &&`
        position: fixed;
        margin-top: ${RelSize(4, 1)};
        height: 85%;
        ${props.orientation === 'left' &&`
            left: ${RelSize(1, 1)};
        `};
        ${props.orientation === 'right' &&`
            right: ${RelSize(1, 1)};
        `};
    `}
`;

export const PanelDiv = styled.div`
    position: relative;
    color: white;
    background-color: ${props => props.altcolour ? theme.grey : theme.blue};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 10px;
    ${props => (props.orientation === 'left' && props.border) &&`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    `}
    ${props => (props.orientation === 'right' && props.border) &&`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    `}
`;

export const PanelDesc = styled.div`
    writing-mode: vertical-rl;
    text-orientation: mixed;
    padding: ${RelSize(12, 16)};
    height: 100%;
    text-align: center;
    ${props => props.orientation === 'left' &&`
        writing-mode: vertical-lr;
        transform: rotate(-180deg);
    `}
    ${props => props.orientation === 'right' &&`
        writing-mode: vertical-rl;
    `}
`;

export const PanelContainerDiv = styled.div`
    position: absolute;
    background-color: ${props => props.altcolour ? theme.grey : theme.blue};
    padding-top: 20px;
    padding-bottom: 20px;
    height: 100%;
    transition: width 0.4s;
    transition-delay: ${props => props.animate ? 0 : '0.4s'};
    ${props => props.orientation === 'left' &&`
        left: 40px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    `}
    ${props => props.orientation === 'right' &&`
        right: 40px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    `}
    @media all and (min-width: 1025px) {
        width: ${props => props.animate ? RelSize(25, 1) : "0px"};
        padding-left: ${props => props.padding ? RelSize(15, 10) : "0px"};
        padding-right: ${props => props.padding ? RelSize(15, 10) : "0px"};
    }
    @media all and (max-width: 1024px) {
        width: ${props => props.animate ? RelSize(25, 1) : "0px"};
        padding-left: ${props => props.padding ? RelSize(15, 10) : "0px"};
        padding-right: ${props => props.padding ? RelSize(15, 10) : "0px"};
    }
    overflow: hidden;
`;

export const InternalPanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: ${theme.white};
    border-radius: 10px;
    opacity: ${props => props.animate ? 1 : 0};
    transition: opacity 0.4s;
    transition-delay: ${props => props.animate ? '0.4s' : 0};
`;

export const PanelItemContainer = styled.div`
    margin: 10px;
    padding: ${RelSize(1, 2)};
    background-color: ${theme.white};
    line-height: 1.5;
    font-size: 1.5rem;
    border-radius: ${RelSize(3, 2)};
    border: 1px solid black;
    align-items: center;
    text-align: center;
    color: ${theme.black};
    transition: all ease-in 0.2s;
    :hover {
        cursor: pointer;
        border-color: ${theme.blue};
        box-shadow: inset 0 0 10px ${theme.blue};
    }
`;

export const PanelItemType = styled.div`
    color: ${theme.grey};
    font-size: 16px;
    font-weight: 200;
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const PanelItemTypeName = styled.div`
    font-size: 25px;
    font-weight: 400;
`;

export const PanelItemTypeDate = styled.div`
    font-size: 16px;
    font-weight: 300;
`;

export const PanelItemDesc = styled.div`
    font-size: 16px;
    font-weight: 300;
`;

export const HelpText = styled.div`
    color: ${theme.grey};
    font-size: 12px;
    font-weight: 200;
`;