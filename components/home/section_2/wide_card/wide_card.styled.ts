import styled, { keyframes } from "styled-components";
import theme from "../../../../global/styles/theme";

interface IIC {
    imgBGColor: string;

}
interface ICC {
    direction: string;

}
interface ICV {
    cardVisabillty: any;
}


export const CardContainer = styled.div<ICC & ICV>`
    position: relative;
    transition: 0.8s ease-out;
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: ${props => props.direction === 'right' ? 'row-reverse' : 'row'};
    gap: 5rem;
    opacity: ${props => props.cardVisabillty ? '1' : '0'};
    animation-name: ${props => props.cardVisabillty ? 'card_container' : ''};
    animation-duration: 2s;
    @keyframes card_container {
        0% {
            gap: 100%;
            opacity: 0;
        }
        20% {
            opacity: 0;
        }
        60%{
            gap: 5rem;
            opacity: 1;
        }
        100% {
            gap: 5rem;
            opacity: 1;
        }
    }
`
export const ImageContainer = styled.div<ICC & ICV>`
    height: 100%;
    position: relative;
    width: 50%;
    max-width: 526px;
    animation-name: ${props => props.cardVisabillty ? 'image_container' : ''};
    animation-duration: 1.7s;
   `
export const Rectangle = styled.div<IIC & ICC & ICV>`
    position: absolute;
    border-radius: ${props => props.direction === 'left' ? '0px 7px 7px 0' : '7px 0px 0px 7px'};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 21rem;
    background-color: ${props => props.imgBGColor};

`
export const WImage = styled.div`

`
export const OuterTextContainer = styled.div<ICC & ICV>`
    position: relative;
    height: 100%;
    width: 50%;
    max-width: 526px;
    animation-name: ${props => props.cardVisabillty ? 'outer_text_container' : ''};
    animation-duration: 1.7s;
`

export const TextContainer = styled.div<ICC & ICV>`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    animation-name: ${props => props.cardVisabillty ? 'text_container' : ''};
    animation-duration: 1.7s
    
`

export const Header = styled.p`
    line-height: 3.2rem;
    font-size: 3rem;
    color: ${theme.hexcolors.dark};
    font-family: ${theme.fonts_prime};
    font-weight: ${theme.font_weights.bold};

`
export const Text = styled.p`
    font-size: 1.1rem;
    line-height: 1.7rem;
    font-family: ${theme.fonts_second};
    font-weight: ${theme.font_weights.redular};
`
export const TextLink = styled.p`
    font-size: 1.1rem;
    color: blue;
    font-family: ${theme.fonts_second};
    font-weight: ${theme.font_weights.medium};
`

