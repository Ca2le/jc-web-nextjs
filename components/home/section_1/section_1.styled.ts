import styled from "styled-components";
import theme from "../../../global/styles/theme";


export const Container = styled.div`
width: 100%;
display: flex;
height: 96vh;
background-color: ${theme.hexcolors.mint};
flex-direction: row;
align-items: center;
justify-content: center;
@media screen and (max-width: ${theme.screen.tablet}) and (orientation: portrait){
    flex-direction: column;
    width: 100%;
}


`
export const InnerDivImage = styled.div`
display: flex;
height: 50%;
width: 100%;
flex-direction: row;

`
export const InnerDivHeader = styled.div`
display: flex;
height: auto;
margin: 2rem 0;
width: 100%;
flex-direction: row;
`