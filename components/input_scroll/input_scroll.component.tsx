import React, { useContext } from 'react'
import * as CL from '../components.libary'
import { ScrollTo } from '../../scripts/scroll_features';
import { Input } from './input_scroll.styled'

interface IISC {
    reference: any;
    text: string;
}
function InputScrollComponent(props: IISC) {
  const {state} = useContext(CL.HamburgerToggleContext)
  return (
    <Input toggle={state} type='button' value={props.text} onClick={() => ScrollTo(props.reference)} />
  )
}

export default InputScrollComponent