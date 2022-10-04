import styled from "styled-components";
import theme from "../../../global/styles/theme";

export const PopupContainer = styled.div`
    z-index: 2;
    transition: 1s;
    position: absolute;
    height: 80px;
    width: 140px;
    top: 170%;
    left: 0;
    transform: translateY(-170%);
    .popup{
        fill: white;
    }
`
export const Message = styled.p`

    font-family: ${theme.fonts_thick};
    font-weight: ${theme.font_weights.bold};
    position: absolute;
    font-size: 13px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
`

