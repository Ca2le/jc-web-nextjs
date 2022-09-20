import React, { useContext } from 'react'
import Link from 'next/link'
import { A } from './link.styled'
import * as CL from '../components.libary'

interface LinkProps {
  value: string;
  route: string;
}

function LinkComponent(props: LinkProps) {

  const {state} = useContext(CL.HamburgerToggleContext)
  
  return (
    <React.Fragment>
      <Link href={props.route} passHref >
        <A toggle={state}>{props.value}</A>
      </Link>
    </React.Fragment>
  )
}

export default LinkComponent