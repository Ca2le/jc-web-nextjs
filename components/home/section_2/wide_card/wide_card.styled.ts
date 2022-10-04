import styled from "styled-components";
import theme from "../../../../global/styles/theme";

interface IIC {
    imgBGColor: string;
}
interface ICC {
    direction: string;
}

export const CardContainer = styled.div<ICC>`
    height: 340px;
    width: 100%;
    display: flex;
    flex-direction: ${props => props.direction === 'right' ? 'row-reverse' : 'row'};
    justify-content: center;
    align-items: center;
    gap: 5rem;
    @media screen and (max-width: ${theme.screen.laptop}) {
       gap: 0;
    }
    @media screen and (max-width: ${theme.screen.tablet}) and (orientation: portrait) {
      flex-direction: column;
      height: 100%;
      
    }
 
`
export const ImageContainer = styled.div`
    height: 340px;
    position: relative;
    display: flex;
    width: 30rem;
    
    @media screen and (max-width: ${theme.screen.laptop}) {
        width: 50%;
        
    }
      
    @media screen and (max-width: ${theme.screen.tablet}) and (orientation: portrait) {
        height: 340px;
        width: 100%;
        
    }
   `
export const Rectangle = styled.div<IIC & ICC>`
    right: ${props => props.direction === 'right' ? '0' : ''};
    left: ${props => props.direction === 'right' ? '' : '0'};
    position: absolute;
    width: 21rem;
    height: 21rem;
    background-color: ${props => props.imgBGColor};
    @media screen and (max-width: ${theme.screen.laptop}) {
        width: 80%;
        height: 21rem;
        right: ${props => props.direction === 'right' ? '0' : ''};
        left: ${props => props.direction === 'right' ? '' : '0'};
    }
    @media screen and (max-width: 240px) {
        width: 100%;

        
    }
`
export const Circle = styled.div<IIC & ICC>`
    position: absolute;
    right: ${props => props.direction === 'right' ? '11rem' : ''};
    left: ${props => props.direction === 'right' ? '' : '11rem'};
    width: 21rem;
    height: 21rem;
    border-radius: 50%;
    background-color: ${props => props.imgBGColor};
    @media screen and (max-width: ${theme.screen.laptop}) {
        right: ${props => props.direction === 'right' ? '4.5rem' : ''};
        left: ${props => props.direction === 'right' ? '' : '4.5rem'};
    }
    @media screen and (max-width: ${theme.screen.tablet}) and (orientation: portrait) {
        right: ${props => props.direction === 'right' ? '4.5rem' : ''};
        left: ${props => props.direction === 'right' ? '' : '4.5rem'};
        
    }
`
export const WImage = styled.div`

`
export const TextContainer = styled.div`
    margin: 20px;
    width: 30rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    @media screen and (max-width: ${theme.screen.laptop}) {
        width: 50%;
        
    }
    @media screen and (max-width: ${theme.screen.phone}) {
        width: 100%;
        text-align: center;
    }
`

export const Header = styled.p`
    line-height: 3.2rem;
    font-size: 3rem;
    color: ${theme.hexcolors.dark};
    font-family: ${theme.fonts_prime};
    font-weight: ${theme.font_weights.bold};
    @media screen and (max-width: ${theme.screen.phone}) {
        font-size: 2.3rem;
    }
    @media screen and (max-width: 330px){
    font-size: 10vw;
}
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