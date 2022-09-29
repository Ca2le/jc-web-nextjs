import styled from "styled-components";
import theme from "../../global/styles/theme";
interface IA {
    toggle: boolean
}
export const A = styled.a<IA>`
    color: ${props => props.toggle ? theme.hexcolors.mint : theme.hexcolors.dark };
    font-size: ${props => props.toggle ? '2.2rem' : '1.5rem' };
    text-decoration: none;

    &:hover{
        text-decoration: underline;
        color: ${theme.hexcolors.tiger};
    }
`