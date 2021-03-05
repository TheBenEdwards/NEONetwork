import styled from 'styled-components';
import theme from '../theme'
import { RelSize } from '../mixins'

export const FormRow = styled.div`
    margin-bottom: ${props => props.flush ? 0 : props.small ? RelSize(15, 16) : RelSize(20, 16)};
    text-align: ${props => props.align ? props.align : "left"};
    ${props => props.above &&`
        z-index: 5;
    `};
    width: ${props => props.noWidth ? "auto" : "100%"};
    input:not([type='checkbox']), textarea {
        background-color: ${theme.white};
        border: 1px solid ${theme.outline};
		border-radius: ${props => props.small ? RelSize(10, 12) : RelSize(10, 16)};
        display: block;
        font-size: ${props => props.small ? "12px" : "16px"};
        padding: ${props => props.small ? RelSize(5, 12) : props.medium ? RelSize(10, 16) : RelSize(10, 16)};
        width: 100%;
        &:active, &:focus {
            box-shadow: none;
            outline: none;
        }
        &[readonly] {
			background-color: ${theme.eventBackground};
            color: ${theme.outline};
        }
        &[type="date"]::-webkit-inner-spin-button {
            display: none;
            -webkit-appearance: none;
        }
    }
    textarea {
        min-height: ${RelSize(145, 16)};
    }
    input[type="file"] {
        cursor: pointer;
        opacity: 0;
        padding: ${props => props.small ? RelSize(5, 16) : RelSize(7, 16)};
    }
    input[type="date"] {
        padding: ${props => props.small ? RelSize(5, 16) : RelSize(7, 16)};
    }
`;

export const FormRowInner = styled.div`
    ${props => props.alternative &&`
        align-items: center;
        display: flex;
        justify-content: center;
    `}
    position: relative;
    text-align: ${props => props.align ? props.align : "left"};
    ${props => props.inline &&`
        @media all and (min-width: 769px) {
            align-items: center;
            display: flex;
            flex-wrap: ${props.nowrap ? "nowrap" : "wrap"};
            label {
                padding-right: ${props.small ? RelSize(5, 16) : RelSize(20, 16)};
                margin-bottom: 0;
                min-width: ${props.small ? RelSize(100, 16) : RelSize(150, 16)};
                max-width: ${RelSize(250, 16)};
				${props.nowrap &&`
					white-space: nowrap;
				`}
            }
            input, select {
                flex: 1;
            }
        }
    `}
    ${props => props.full &&`
        padding-left: ${RelSize(50, 16)};
    `}
    ${props => props.hasBorder &&`
        &::after {
            background-color: ${props.hasBorder};
            bottom: 0;
            content: "";
            height: 10px;
            left: 0;
            position: absolute;
            right: 0;
            z-index: 1;
        }
    `}
`;

export const LabelFlex = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Label = styled.label`
    color: ${props => props.light ? theme.white : theme.black};
    display: block;
    font-size: ${props => props.small ? RelSize(12, 16) : RelSize(14, 16)};
    font-weight: 300;
    left: 0;
    line-height: ${RelSize(20, 16)};
    margin: 0 0 ${props => props.isTitle ? RelSize(20, 14) : RelSize(5, 14)};
    padding: 0;
    ${props => props.help &&`
        padding-right: ${RelSize(20, 14)};
    `};
    position: relative;
    text-align: left;
    ${props => props.alternative &&`
        color: ${theme.white};
        max-width: none;
        white-space: nowrap;
        width: auto;
    `};
    a {
        color: ${props => props.theme.PrimaryColour};
        cursor: pointer;
        font-weight: 700;
    }
    ${props => props.full &&`
        form & {
            max-width: none !important ;
            text-align: left !important;
        }
    `}
    ${props => props.centre &&`
        text-align: center;
    `}
`;

export const ErrorLabel = styled.label`
    color: ${theme.red};
    display: block;
    font-size: ${RelSize(14, 16)};
    font-weight: 300;
    left: 0;
    line-height: ${RelSize(20, 16)};
    padding: 0;
    position: relative;
    text-align: left;
`;