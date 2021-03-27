import { useState, useContext } from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { equals, length } from 'ramda'

import { AnsweredQuestionsContext } from 'shared/providers/AnsweredQuestionsProvider'

import { normalizeQuizQuestions } from 'modules/quiz/lib/normalizers'

import {
  ParsedResponse,
  Question,
  AnsweredQuestion,
} from 'modules/quiz/lib/types'

type QuizProps = {
  questions: Question[]
}

const Quiz = ({ questions = [] }: QuizProps) => {
  const { push } = useRouter()

  const [currentQuestionIndex, setSurrentQuestionIndex] = useState<number>(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<
    AnsweredQuestion[]
  >([])

  const { setAnsweredQuestionsContext } = useContext(AnsweredQuestionsContext)

  const currentQuestion = questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === questions.length - 1

  console.log({
    // currentQuestionIndex,
    // currentQuestion,
    // questions,
    // isLastQuestion,
    lenAns: answeredQuestions.length,
    lenQue: questions.length,
    answeredQuestions,
  })

  const onAnswerQuestion = (optionAnswered: string) => {
    console.log({
      check: equals(length(answeredQuestions), length(questions)),
    })

    if (equals(length(answeredQuestions), length(questions))) {
      setAnsweredQuestionsContext(answeredQuestions)
      return push('results')
    }

    setAnsweredQuestions((prevState) => [
      ...prevState,
      { ...currentQuestion, optionAnswered },
    ])

    return !isLastQuestion
      ? setSurrentQuestionIndex((cur) => cur + 1)
      : () => {}
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
