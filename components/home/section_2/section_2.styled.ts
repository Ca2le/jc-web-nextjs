import styled from "styled-components";
import theme from "../../../global/styles/theme";


export const S2Container = styled.div`
    position: relative;
    padding-top: 2vh;
    height: auto;
    width:100%;
    font-weight: ${theme.font_weights.black};
    color: ${theme.hexcolors.dark};
    display: flex;
    justify-content: center;
    

`
export const S2InnerContainer = styled.div`
    z-index: 2;
    
    height: 100%;
    margin-bottom: 4rem;
    @media screen and (max-width: ${theme.screen.laptop}) and (orientation: landscape){
        width: 100%;
    }

    @media screen and (min-width: ${theme.screen.desktop}){
        margin-bottom: 6rem;
    }
    @media screen and (max-width: 900px){
        margin-bottom: 6rem;
        width: 100%;
    }

`
export const CardContainer = styled.div`

`
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5rem;
    padding-top: 2rem;

`