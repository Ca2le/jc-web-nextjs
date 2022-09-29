import styled from "styled-components";
import theme from "../../../../../global/styles/theme";


interface IImgContainer {
    color: string;
}

export const CardContainer = styled.div`
    height: 27rem;
    width: 18rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    box-shadow: 0.6rem 0.6rem  0.8rem  rgba(58, 58, 58, 0.09);
    @media screen and (max-width: 330px){
    width: 90vw;
}
`


export const ImgContainer = styled.div<IImgContainer>`
    position: relative;
    background-color: ${props =>props.color};
    height: 8.3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.8rem;
`

export const TextContainer = styled.div`
    width: 100%;
    height: auto;
   
`
export const HeaderContainer = styled.div`
    display: flex;
    height: 4.5rem;
    flex-direction: column;


`
export const Header = styled.p`
    color: ${theme.hexcolors.dark};
    font-family: ${theme.fonts_prime};
    font-size: 1.6rem;
    font-weight: ${theme.font_weights.bold};
`
export const SubHeader = styled.p`
    color: ${theme.hexcolors.dark};
    margin-top: -0.1rem;
    font-family: ${theme.fonts_thick};
    font-size: 13px;
    font-weight: ${theme.font_weights.light};
    
`
export const InfoContainer = styled.div`

`
export const InfoText = styled.p`
    color: ${theme.hexcolors.dark};
    line-height: 1.2rem;
    font-family: ${theme.fonts_second};
    font-size: 1.1rem;
    font-weight: ${theme.font_weights.medium};
`
export const StatusContainer = styled.div`
    display: flex;
    margin-top: auto;
    width: 100%;
    height: 1.9rem;
    align-items: center;
    justify-content: center;
`
export const StatusText = styled.p`
    transform: scale(90%, 130%);
    color: ${theme.hexcolors.dark};
    font-family: ${theme.fonts_second};
    font-size: 1.1rem;
    font-weight: ${theme.font_weights.redular};
`
