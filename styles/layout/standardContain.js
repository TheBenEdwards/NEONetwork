import styled from 'styled-components'
import { RelSize } from '../mixins'
import theme from '../theme'

export const HomeContainer = styled.body`
    margin: ${props => props.push ? RelSize(50, 16) : 0} auto 0;
    max-width: ${props => props.small ? theme.smallMaxWidth : theme.maxWidth};
    padding: ${RelSize(20, 16)} ${RelSize(50, 16)};
    width: 100%;
`;