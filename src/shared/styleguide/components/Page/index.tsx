import React from 'react'
import styled, { css } from 'styled-components'

import { color, space, fontSize } from 'shared/styleguide/lib'

const centralizedFlex = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color('neutral')};
  padding: ${space('4')};
`

const Header = styled.header`
  ${centralizedFlex}

  font-size: ${fontSize('2xl')};
`

const Footer = styled.footer`
  ${centralizedFlex}

  p {
    margin-bottom: ${space('4')};
  }
`

type PageProps = {
  children: React.ReactNode
}

const Page = ({ children }: PageProps) => (
  <Wrapper>
    <Header>Trivia Game!</Header>

    <main>{children}</main>

    <Footer>
      <p>
        Designed by <strong>guilhermedeoliveira</strong>
      </p>
      <span>&#174; {new Date().getFullYear()}</span>
    </Footer>
  </Wrapper>
)

export default Page
