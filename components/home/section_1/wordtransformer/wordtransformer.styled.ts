import styled from "styled-components";
import theme from "../../../../global/styles/theme";

export const WordContainer = styled.div`
position: relative;
display: flex;
align-items:center;
height: 7rem;
width: 100%;
padding-top: 1rem;

@media screen and (max-width: 1400px){
    height: 5rem;
}
@media screen and (max-width:950px){
    height: 4.2rem;
}
@media screen and (max-width: ${theme.screen.tablet}) and (orientation: portrait){
    height: 5vh;
    margin-bottom: 1rem;
}
`
interface IW {
    keyFrame: any
}
export const Word = styled.p<IW>`
position: absolute;
font-family: ${theme.fonts_prime};
margin-right: auto;
font-size: 5.2rem;
color: ${theme.hexcolors.dark};
font-weight: ${theme.font_weights.bold};
animation-name: ${props => { return props.keyFrame}};
animation-duration: 2s;
@media screen and (max-width: 1400px){
    font-size: 4.1rem;
}
@media screen and (max-width:950px){
    font-size: 3.1rem;
}

@media screen and (max-width: ${theme.screen.tablet}) and (orientation: portrait){
    font-size: 2.2rem;
}
`

