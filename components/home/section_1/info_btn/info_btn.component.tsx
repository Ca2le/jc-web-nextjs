import React, { useContext } from 'react'
import { MoreInfoBtn } from './info_btn.styled'
import * as CL from '../../../components.libary'
import { ScrollTo } from '../../../../scripts/scroll_to'


function InfoBtnComponent() {
    const {state_langange} = useContext(CL.LangageContext)
    const scrollContext = useContext(CL.ScrollContext)

        return(
            <MoreInfoBtn onClick={ () => { ScrollTo(scrollContext.state.footerSection) }}>{state_langange.readmore_txt}</MoreInfoBtn>
        )
}

export default InfoBtnComponent