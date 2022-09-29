import styled from "styled-components";
import theme from "../../../../global/styles/theme";

export const MoreInfoBtn = styled.button`
    margin-top: 4vw;
    border: 2px solid ${theme.hexcolors.dark};
    font-family: ${theme.fonts_second};
    font-size: 1.4rem;
    font-weight: ${theme.font_weights.medium};
    color: #fff;
    background-color: ${theme.hexcolors.rasberry};
    max-width: 14rem;
    height: 2.3rem;
    
    

    &:hover{
        background-color: ${theme.hexcolors.dark};
        color: white;
    }
`