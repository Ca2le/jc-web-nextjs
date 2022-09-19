import React from 'react'
import NextLink from 'next/link'

interface LinkProps {
  value: string
  route: string
}
function Link(props: LinkProps) {
  return (
    <React.Fragment>
      <NextLink href={props.route} passHref>
        <a>{props.value}</a>
      </NextLink>
    </React.Fragment>
  )
}

export default Link