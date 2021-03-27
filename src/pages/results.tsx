import { useContext } from 'react'

import { AnsweredQuestionsContext } from 'shared/providers/AnsweredQuestionsProvider'

const Results = () => {
  const { answeredQuestionsContext } = useContext(AnsweredQuestionsContext)

  console.log({ answeredQuestionsContext })

  return <div>Results Page</div>
}

export default Results
