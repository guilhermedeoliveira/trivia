import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'

import { color, space, fontSize } from 'shared/styleguide/lib'

type PageProps = {
  title: string
  children: React.ReactNode
  navigation?: {
    text?: string
    page?: string
  }
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
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color('neutral')};
  overflow-y: auto;
  padding: ${space('4')} ${space('4')} ${space('8')};

  @media (min-width: 800px) {
    padding: ${space('8')} ${space('8')} ${space('12')};
  }
`

const Header = styled.header`
  ${centralizedFlex}
  padding-bottom: ${space('4')};

  @media (min-width: 800px) {
    padding-bottom: ${space('8')};
  }

  h1 {
    text-align: center;
    font-size: ${fontSize('2xl')};
  }
`

const Main = styled.main`
  flex-grow: 1;
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
const StyledLink = styled.a`
  cursor: pointer;
  text-transform: uppercase;
`

const Page = ({
  title,
  children,
  navigation = {},
  navigation: { text, page = '' } = {},
}: PageProps) => (
  <Wrapper>
    <Header>
      <h1>{title}</h1>
    </Header>

    <Main>{children}</Main>

    {Object.entries(navigation) && (
      <Footer>
        <Link href={`/${page}`}>
          <StyledLink>{text}</StyledLink>
        </Link>
      </Footer>
    )}
  </Wrapper>
)

export default Page
