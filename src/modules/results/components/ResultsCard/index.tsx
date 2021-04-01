import Card from 'shared/styleguide/components/Card'
import Answer from 'modules/results/components/Answer'

import { AnsweredQuestion } from 'shared/types'

type ResultsProps = {
  answers: AnsweredQuestion[]
}

const ResultsCard = ({ answers }: ResultsProps) => (
  <Card>
    <ul>
      {answers.map((a: AnsweredQuestion, i: number) => (
        <Answer key={`${i}-${a.question}`} answer={a} />
      ))}
    </ul>
  </Card>
)

export default ResultsCard
