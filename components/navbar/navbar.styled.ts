import styled from 'styled-components'
import theme from '../../global/styles/theme'

interface IND {
    toggle: boolean;
    device: string;
    status: string
}
export const Nav_Div = styled.div<IND>`
    transition: all ease-out 0.25s;
    z-index: 3;
    position: fixed;
    width:  100%;
    background-color: ${props => {
        if((props.device === 'phone' && props.toggle|| props.device === 'tablet') && props.toggle) {
            return 'rgba(26, 26, 26, 0.99)'
        } if (!props.toggle && props.status === 'top') {
            return 'transparent'
        }
        else return 'white'
    }};
    height: ${props => (props.device === 'phone' && props.toggle || props.device === 'tablet' && props.toggle) ? '100vh' : '20vh'};
    transform: translateY(${props => !props.toggle && props.status === 'hidden' ? '-40vh' : ''});
    box-shadow: ${props => !props.toggle && props.status === 'top' ? '' : '0 0.8rem 0.8rem rgba(58, 58, 58, 0.12)'};
`

export const Nav_Wrapper = styled.div`
    height: 80%;
    width:  80%;
    margin: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
    
`
