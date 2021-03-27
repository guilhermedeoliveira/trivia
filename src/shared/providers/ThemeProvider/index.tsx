import React from 'react'
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
    neutral: '#e0e0de',
  },
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
