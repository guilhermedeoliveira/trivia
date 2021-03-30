import { useContext } from 'react'

import { AnsweredQuestionsContext } from 'shared/providers/AnsweredQuestionsProvider'
import Page from 'shared/styleguide/components/Page'
import ResultsCard from 'modules/quiz/components/ResultsCard'

import { getTotalScore } from 'modules/quiz/lib/normalizers'
import useEmptyAnsweredQuestionsRedirect from 'shared/hooks/useEmptyAnsweredQuestionsRedirect'

const Results = () => {
  const { answeredQuestionsContext } = useContext(AnsweredQuestionsContext)

  useEmptyAnsweredQuestionsRedirect(answeredQuestionsContext)

  return (
    <Page
      title={`You scored ${getTotalScore(answeredQuestionsContext)} / ${
        answeredQuestionsContext.length
      }`}
    >
      <ResultsCard answers={answeredQuestionsContext} />
    </Page>
  )
}

export default Results
