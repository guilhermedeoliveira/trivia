import { useState, useContext } from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { equals, length } from 'ramda'

import Page from 'shared/styleguide/components/Page'
import QuestionCard from 'modules/quiz/components/QuestionCard'

import { AnsweredQuestionsContext } from 'shared/providers/AnsweredQuestionsProvider'
import { normalizeQuizQuestions } from 'modules/quiz/lib/normalizers'
import { ParsedResponse, Question } from 'shared/types'

type QuizProps = {
  questions: Question[]
}

const Quiz = ({ questions = [] }: QuizProps) => {
  const { push } = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [completed, setCompleted] = useState<number>(0)
  const { answeredQuestionsContext, setAnsweredQuestionsContext } = useContext(
    AnsweredQuestionsContext
  )

  const currentQuestion = questions[currentQuestionIndex]

  const onAnswerQuestion = (
    optionAnswered: string
  ): void | Promise<boolean> | NodeJS.Timeout => {
    setAnsweredQuestionsContext((prevState: Question[]) => [
      ...prevState,
      { ...currentQuestion, optionAnswered },
    ])

    if (equals(length(answeredQuestionsContext), length(questions) - 1)) {
      setCompleted((cur) => cur + 10)

      return setTimeout(() => {
        push('results')
      }, 500)
    }

    setCompleted((cur) => cur + 10)
    setCurrentQuestionIndex((cur) => cur + 1)
  }

  return (
    <Page title="Trivia Game!">
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
