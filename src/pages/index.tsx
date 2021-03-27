import { useState, useContext } from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { equals, length } from 'ramda'

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

  return (
    <div>
      <header>header</header>

      <main>
        <h1>{currentQuestion.category}</h1>
        <h2>{currentQuestion.difficulty}</h2>
        <p>{currentQuestion.question}</p>

        <div>
          <button onClick={() => onAnswerQuestion('true')}>true</button>
          <button onClick={() => onAnswerQuestion('false')}>false</button>
        </div>
      </main>

      <footer>footer</footer>
    </div>
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
