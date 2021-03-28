import React from 'react'
import Head from 'next/head'
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'

import Preconnect from 'shared/components/Preconnect'

import colors from 'shared/styleguide/colors'
import typographies from 'shared/styleguide/typographies'
import spaces from 'shared/styleguide/spaces'

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    outline: none;
    margin: 0;
    padding: 0;
    position: relative;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
`

const theme = {
  colors,
  typographies,
  spaces,
}

const GlobalFonts = () => (
  <>
    <Preconnect
      links={['https://fonts.googleapis.com', 'https://fonts.gstatic.com']}
    />
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        rel="stylesheet"
      />
    </Head>
  </>
)

type ThemeProviderProps = {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>
    <GlobalFonts />
    <GlobalStyle />
    {children}
  </StyledThemeProvider>
)

export default ThemeProvider
