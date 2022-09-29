import styled from "styled-components";
import theme from "../../global/styles/theme";
interface ICopyrightLine {

}
export const FootContainer = styled.div`
   
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20rem;
    width: 100%;
    background-color: ${theme.hexcolors.mint};
    @media screen and (max-width: 900px) {
        height: 40rem;
        align-items: stretch;
    }
`
export const UpperContainer = styled.div`
    height: 90%;
    width: 90%;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        width: 100%;
        gap: 3rem;
       
    }

`
export const Line = styled.div`
    position: absolute;
    height: 10rem;
    width: 1px;
    left: 35%;
    top: 50%;
    transform: translate(-31%, -50%);
    background-color: ${theme.hexcolors.dark};
    @media screen and (max-width: 900px) {
        width: 10rem;
        height: 1px;
        left: 50%;
        top: 33.5%;
        transform: translate(-50%, -33.5%);
    }
`
export const ContactContainer = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`
export const ContactInnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media screen and (max-width: 900px) {
        width: 90%;
        align-items: center;
        display: flex;
    }
`
export const Message = styled.div`
    color: ${theme.hexcolors.dark};
    font-family: ${theme.fonts_prime};
    font-weight: ${theme.font_weights.bold};
    font-size: 2rem;
`

export const ContactBtn = styled.input`
    text-align: center;
    height: 100%;
    width: 20rem;
    border: 1.5px solid ${theme.hexcolors.dark};
    border-right-style: none;
    font-family: ${theme.fonts_second};
    font-size: 20px;
    font-weight: ${theme.font_weights.medium};
    color: ${theme.hexcolors.dark};
    background-color: transparent;
    max-width: 25rem;
    @media screen and (max-width: 900px) {
        height: 100%;
        width: 80%;
        font-size: 1.3rem;
        max-width: 100%;
      }
    
`
export const SocialMediaContainer = styled.div`
    width: 20rem;
    display: flex;
    gap: 10px;
    @media screen and (max-width: 900px) {
        width: 8rem;
    }
    
`
export const BottomContainer = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    transform: translateY(0);
    background-color: #141414;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CopyrightLine = styled.p<ICopyrightLine>`
    font-family: ${theme.fonts_second};
    font-size: 16px;
    font-weight: ${theme.font_weights.medium};
    color: #fff;
`
export const LangageToggle = styled.div`


`
export const IconContainer = styled.div`
    position: relative;
    height: 30px;
    width: 30px;
    background-color: #ff4f4f;
    border: 1.5px solid ${theme.hexcolors.dark};
    .linkedin{
        fill: #fff;
    }
    .facebook{
        fill: #fff;
    }

   
`
export const CopyContainer = styled.div`
    position: relative;
    height: 100%;
    width: 20%;
    background-color:  #ff4f4f;
    border: 1.5px solid ${theme.hexcolors.dark};
/*     .copy {
            fill: #fff!important;
            width: 32%;
        }
    &:hover{
        cursor: pointer;
            background-color: ${theme.hexcolors.dark}!important;
            border: none;
            border-color: #fff;
        .copy {
            fill: #fff!important;
           
        }
    } */
    @media screen and (max-width: 900px) {
        height: 3rem;
        width: 20%;
        /* .copy {
            fill: #fff!important;
            width: 30%;
        } */
    }
    
  
  
    
`
export const ContactBtnContainer = styled.div`
    display: flex;
    height: 3rem;
    width:20rem;

/*     .check {
            width: 32%;
            background-color: #53a653!important;
            fill: #fff!important;
            border: none;
        }
    .yes{
        background-color: #5cb85c!important;
            color: #fff!important;
            border: none;
    } */

    @media screen and (max-width: 900px) {
        height: 3rem;
        width: 100%;
   /*      .check {
            width: 10%;
            background-color: #53a653!important;
            fill: #fff!important;
            border: none;
        }
    .yes{
        background-color: #5cb85c!important;
            color: #fff!important;
            border: none;
    } */
    }
   
    
    
    
`
