import React from 'react'
import styled, { css } from 'styled-components'

import { color, space, fontSize } from 'shared/styleguide/lib'

type PageProps = {
  title: string
  children: React.ReactNode
}

const centralizedFlex = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color('neutral')};
  overflow-y: auto;
  padding: ${space('4')};

  @media (min-width: 800px) {
    padding: ${space('8')} ${space('8')};
  }
`

const Header = styled.header`
  ${centralizedFlex}
  padding-bottom: ${space('4')};

  @media (min-width: 800px) {
    padding-bottom: ${space('8')};
  }

  h1 {
    font-size: ${fontSize('2xl')};
  }
`

const Main = styled.main`
  padding-bottom: ${space('8')};

  @media (min-width: 800px) {
    padding-bottom: ${space('12')};
  }
`

const Footer = styled.footer`
  ${centralizedFlex}

  p {
    margin-bottom: ${space('4')};
  }
`

const Page = ({ title, children }: PageProps) => (
  <Wrapper>
    <Header>
      <h1>{title}</h1>
    </Header>

    <Main>{children}</Main>

    <Footer>
      <p>
        Designed by <strong>guilhermedeoliveira</strong>
      </p>
      <span>&#174; {new Date().getFullYear()}</span>
    </Footer>
  </Wrapper>
)

export default Page
