import { useEffect, useContext } from 'react'

import { AnsweredQuestionsContext } from 'shared/providers/AnsweredQuestionsProvider'

const useResetAnsweredQuestions = () => {
  const { setAnsweredQuestionsContext } = useContext(AnsweredQuestionsContext)

  useEffect(() => {
    return () => {
      setAnsweredQuestionsContext([])
    }
  }, [setAnsweredQuestionsContext])
}

export default useResetAnsweredQuestions
