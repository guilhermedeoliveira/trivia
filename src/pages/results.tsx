import { useContext } from 'react'

import { AnsweredQuestionsContext } from 'shared/providers/AnsweredQuestionsProvider'
import { AnsweredQuestion } from 'shared/types'
import { isAnswerIncorrect, getTotalScore } from 'modules/quiz/lib/normalizers'

import useEmptyAnsweredQuestionsRedirect from 'shared/hooks/useEmptyAnsweredQuestionsRedirect'

const Results = () => {
  const { answeredQuestionsContext } = useContext(AnsweredQuestionsContext)

  useEmptyAnsweredQuestionsRedirect(answeredQuestionsContext)

  return (
    <div>
      Results Page
      <h1>
        {`You scored ${getTotalScore(answeredQuestionsContext)} / ${
          answeredQuestionsContext.length
        }`}
      </h1>
      <ul></ul>
      {answeredQuestionsContext.map((a: AnsweredQuestion) => (
        <>
          <li style={{ color: isAnswerIncorrect(a) ? 'red' : 'green' }}>
            {a.question}
          </li>
        </>
      ))}
    </div>
  )
}

export default Results
