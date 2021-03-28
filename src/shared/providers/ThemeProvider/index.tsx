import React from 'react'
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'

import colors from 'shared/styleguide/colors'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors,
}

type ThemeProviderProps = {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <>
    <GlobalStyle />

    <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
  </>
)

export default ThemeProvider
