import { useState, useContext } from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { equals, length } from 'ramda'

import Page from 'shared/styleguide/components/Page'
import QuestionCard from 'modules/quiz/components/QuestionCard'

import { AnsweredQuestionsContext } from 'shared/providers/AnsweredQuestionsProvider'
import { normalizeQuizQuestions } from 'modules/quiz/lib/normalizers'
import { ParsedResponse, Question } from 'modules/quiz/lib/types'

type QuizProps = {
  questions: Question[]
}

const Quiz = ({ questions = [] }: QuizProps) => {
  const { push } = useRouter()
  const [currentQuestionIndex, setSurrentQuestionIndex] = useState<number>(0)
  const { answeredQuestionsContext, setAnsweredQuestionsContext } = useContext(
    AnsweredQuestionsContext
  )

  const currentQuestion = questions[currentQuestionIndex]

  const onAnswerQuestion = (
    optionAnswered: string
  ): void | Promise<boolean> => {
    setAnsweredQuestionsContext((prevState: Question[]) => [
      ...prevState,
      { ...currentQuestion, optionAnswered },
    ])

    if (equals(length(answeredQuestionsContext), length(questions) - 1)) {
      return push('results')
    }

    setSurrentQuestionIndex((cur) => cur + 1)
  }

  const completed = ((currentQuestionIndex + 1) / questions.length) * 100

  return (
    <Page>
      <QuestionCard
        question={currentQuestion}
        onAnswerQuestion={onAnswerQuestion}
        completed={completed}
      />
    </Page>
  )
}

export default Quiz

export const getStaticProps: GetStaticProps = async () => {
  const rawResponse = await fetch(process.env.API_URL)
  const parsedResponse = (await rawResponse.json()) as ParsedResponse

  if (!parsedResponse?.results.length) {
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    }
  }

  return {
    props: {
      questions: normalizeQuizQuestions(parsedResponse.results),
    },
  }
}
