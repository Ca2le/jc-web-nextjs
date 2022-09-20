import styled from "styled-components";
import theme from "../../../global/styles/theme";

interface ILC {
    toggle: boolean
}


export const LinkContainer = styled.div<ILC>`
    position: ${props => props.toggle ? 'absolute' : 'static'};
    top: ${props => props.toggle ? '50%' : 'auto'};
    left: ${props => props.toggle ? '50%' : 'auto'};
    transform: ${props => props.toggle ? 'translate(-50%, -50%);' : ''}; 
    display: flex;
    flex-direction: ${props => props.toggle ? 'column' : 'row'};
    gap: 2rem;
    font-family: ${theme.fonts_second};
    
`