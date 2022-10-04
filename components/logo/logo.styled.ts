import styled from "styled-components";
interface ISVG {
    device: string
}
export const SVG = styled.svg<ISVG>`
height: ${props => {
    if(props.device === 'desktop') return '7vh'
    if(props.device === 'tablet' || props.device === 'phone') return '7vh'
    else return '10vh'
}}; 
`
export const SVGContainer = styled.div`
    height: 13vh;
    width: auto;
    display: flex;
    align-items: center;
`
