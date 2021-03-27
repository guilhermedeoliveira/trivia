import { AppProps } from 'next/app'

import ThemeProvider from 'shared/providers/ThemeProvider'
import AnsweredQuestionsProvider from 'shared/providers/AnsweredQuestionsProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <AnsweredQuestionsProvider>
        <Component {...pageProps} />
      </AnsweredQuestionsProvider>
    </ThemeProvider>
  )
}

export default MyApp
