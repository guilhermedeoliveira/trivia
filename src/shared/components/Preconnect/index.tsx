import React from 'react'
import Head from 'next/head'

type PreconnectProps = {
  links: string[]
}

const Preconnect = ({ links = [] }: PreconnectProps) => (
  <Head>
    {links.map((link) => [
      <link key={link} rel="dns-prefetch" href={link} crossOrigin="true" />,
      <link key={link} rel="preconnect" href={link} crossOrigin="true" />,
    ])}
  </Head>
)

export default Preconnect
