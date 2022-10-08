import styled from "styled-components";
import theme from "../../../../global/styles/theme";

export const TextContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   
`
export const InnerTextDiv = styled.div`
    height: 90%;
    width: 39rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
   

@media screen and (min-width: 1400px){
        width: 50rem; 
    }
    @media screen and (max-width: 946px){
        width: 29rem; 
    }
    @media screen and (max-width: ${theme.screen.tablet}){
        width: 24rem; 
    }

`
export const Text1 = styled.p`
color: ${theme.hexcolors.dark};
font-size: 5rem;
font-weight: ${theme.font_weights.bold};
font-family: ${theme.fonts_prime};
line-height: 1;
transform: scaleY(115%);
&::first-letter{
    font-size: 6.3rem;
}
@media screen and (max-width: 1400px){
    &::first-letter{
    font-size: 4.2rem;
}
    font-size: 3.9rem;
}
@media screen and (max-width:950px){
    &::first-letter{
    font-size: 3.2rem;
}
    font-size: 2.9rem;
}

@media screen and (max-width: ${theme.screen.tablet}) and (orientation: portrait){
    &::first-letter{
    font-size: 2.3rem;
    }
    font-size: 2.1rem;
}

`
export const Text3 = styled.p`
transform: scaleY(115%);
color: ${theme.hexcolors.dark};
font-size: 5rem;
font-weight: ${theme.font_weights.bold};
font-family: ${theme.fonts_prime};
line-height: 1;
@media screen and (max-width: 1400px){
    font-size: 3.9rem;
}
@media screen and (max-width:950px){
    font-size: 2.9rem;
}
@media screen and (max-width: ${theme.screen.tablet}) and (orientation: portrait){

    font-size: 2.1rem;
}
`
