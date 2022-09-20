import styled from "styled-components";
import theme from "../../../../global/styles/theme";

export const WordContainer = styled.div`
position: relative;
display: flex;
align-items:center;
height: 5vw;
width: 100%;
@media (max-width: 500px) {
    height: 15vw;
    margin: auto;
    width: 100%;
}
`
interface IW {
    keyFrame: any
}
export const Word = styled.p<IW>`
position: relative;
font-family: ${theme.fonts_prime};
margin-right: auto;
font-size: 4vw;
color: black;
font-weight: 600;
animation-name: ${props => { return props.keyFrame}};
animation-duration: 2s;
`