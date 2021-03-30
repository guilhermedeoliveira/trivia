import React from 'react'
import Head from 'next/head'

type PreconnectProps = {
  links: string[]
}

const Preconnect = ({ links = [] }: PreconnectProps) => (
  <Head>
    {links.map((link, i) => [
      <link
        key={`${i}-link`}
        rel="dns-prefetch"
        href={link}
        crossOrigin="true"
      />,
      <link
        key={`${i}-link`}
        rel="preconnect"
        href={link}
        crossOrigin="true"
      />,
    ])}
  </Head>
)

export default Preconnect
