import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { length } from 'ramda'

import { AnsweredQuestion } from 'modules/quiz/lib/types'

const useEmptyAnsweredQuestionsRedirect = (
  answeredQuestionsContext: AnsweredQuestion[]
) => {
  const { push } = useRouter()

  useEffect(() => {
    const redirectUser = () => {
      if (!length(answeredQuestionsContext)) {
        return push('/')
      }
    }

    redirectUser()
  }, [push, answeredQuestionsContext])
}
export default useEmptyAnsweredQuestionsRedirect
