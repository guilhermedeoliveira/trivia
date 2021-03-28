import { createContext, useState } from 'react'

import { AnsweredQuestion } from 'shared/types'

export const AnsweredQuestionsContext = createContext(null)

type AnsweredQuestionsProviderProps = {
  children: React.ReactNode
}

const AnsweredQuestionsProvider = ({
  children,
}: AnsweredQuestionsProviderProps) => {
  const [answeredQuestionsContext, setAnsweredQuestionsContext] = useState<
    AnsweredQuestion[]
  >([])

  const providerValues = {
    answeredQuestionsContext,
    setAnsweredQuestionsContext,
  }

  return (
    <AnsweredQuestionsContext.Provider value={providerValues}>
      {children}
    </AnsweredQuestionsContext.Provider>
  )
}

export default AnsweredQuestionsProvider
