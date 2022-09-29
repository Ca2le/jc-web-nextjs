import styled from 'styled-components'
import theme from '../../global/styles/theme'

interface IND {
    toggle: boolean;
    device: string;
}

export const Nav_Div = styled.div<IND>`
    position: relative;
    z-index: 3;
    position: fixed;
    width:  100%;
    background-color: ${props => ((props.device === 'phone' && props.toggle|| props.device === 'tablet') && props.toggle) ? 'rgba(26, 26, 26, 0.99)' : 'transparent'};
    height: ${props => (props.device === 'phone' && props.toggle || props.device === 'tablet' && props.toggle) ? '100vh' : '10vh'};
    padding-top: 1rem;
`

export const Nav_Wrapper = styled.div`
    width:  80%;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    
`
