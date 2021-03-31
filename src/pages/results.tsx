import { useContext } from 'react'
import styled from 'styled-components'

import { AnsweredQuestionsContext } from 'shared/providers/AnsweredQuestionsProvider'
import Page from 'shared/styleguide/components/Page'
import ResultsCard from 'modules/quiz/components/ResultsCard'

import useEmptyAnsweredQuestionsRedirect from 'shared/hooks/useEmptyAnsweredQuestionsRedirect'
import useResetAnsweredQuestions from 'shared/hooks/useResetAnsweredQuestions'

import {
  getTotalScore,
  generateScoreFeedback,
} from 'modules/quiz/lib/normalizers'
import { space, fontSize } from 'shared/styleguide/lib'

const ScoreFeedback = styled.h2`
  text-align: center;
  font-weight: normal;
  font-size: ${fontSize('large')};
  padding-bottom: ${space('4')};

  @media (min-width: 800px) {
    padding-bottom: ${space('8')};
    font-size: ${fontSize('2xl')};
  }
`

const Results = () => {
  const { answeredQuestionsContext } = useContext(AnsweredQuestionsContext)

  useEmptyAnsweredQuestionsRedirect(answeredQuestionsContext)
  useResetAnsweredQuestions()

  const totalScore = getTotalScore(answeredQuestionsContext)
  const scoreFeedback = generateScoreFeedback(totalScore)

  return (
    <Page
      title={`You scored ${totalScore} / ${answeredQuestionsContext.length}`}
      navigation={{ text: 'play again?' }}
    >
      <ScoreFeedback aria-label="score feedback">{scoreFeedback}</ScoreFeedback>

      <ResultsCard answers={answeredQuestionsContext} />
    </Page>
  )
}

export default Results
