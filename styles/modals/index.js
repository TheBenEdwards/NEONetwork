import styled from 'styled-components';
import { RelSize } from '../mixins';

export const ModalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 99999
    },
    content : {
        backgroundColor: 'rgb(51, 51, 51)',
        border: '0',
        borderRadius: RelSize(24, 16),
        top: '50%',
        left: '50%',
        padding: RelSize(25, 16),
        position: 'relative',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        maxHeight: '95vh'
    }
};

export const ModalClose = styled.div`
    align-items: center;
    border-radius: 50%;
    color: ${props => props.theme.black};
    display: flex;
    justify-content: center;
    height: ${RelSize(35, 16)};
    position: absolute;
    right: ${RelSize(10, 16)};
    top: ${RelSize(10, 16)};
    width: ${RelSize(35, 16)};
    transition: all ease-in 0.2s;
    a {
        cursor: pointer;
        display: block;
        text-decoration: none;
    }
    :hover{
        color: ${props => props.theme.blue};
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
        text-transform: uppercase;
    }
`;

export const ModalContent = styled.div`
    display: block;
    ${props => props.large &&`
        min-height: ${RelSize(30, 1)}
    `}
    ${props => props.center &&`
        text-align: center;
    `}
`;

export const ModalContentInner = styled.div`
    margin-bottom: ${RelSize(30, 16)};
`;

export const ModalHeaderDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${RelSize(30, 16)};
`;

export const InfoConatiner = styled.dl`
    padding: 5px;
    margin: 0;
    dt {
        font-weight: 700;
    }
    dd {
        margin-left: 0;
        padding-left: 0;
    }
`;