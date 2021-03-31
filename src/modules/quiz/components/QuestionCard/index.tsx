import React from 'react'
import styled from 'styled-components'

import { Question } from 'shared/types'

import Card from 'shared/styleguide/components/Card'
import ProgressBar from 'shared/styleguide/components/ProgressBar'
import Button from 'shared/styleguide/components/Button'

import { space, fontSize } from 'shared/styleguide/lib'

type CardProps = {
  question: Pick<Question, 'category' | 'difficulty' | 'question'>
  onAnswerQuestion: (answer: string) => void
  completed: number
  children?: React.ReactNode
}

const ProgressBarWrapper = styled.div`
  display: flex;
  max-width: ${space('100')};
`

const Category = styled.h1`
  font-weight: bold;
  font-size: ${fontSize('xl')};
  padding-bottom: ${space('4')};

  @media (min-width: 800px) {
    font-size: ${fontSize('2xl')};
  }
`

const DifficultyText = styled.em`
  padding-bottom: ${space('4')};
`

const QuestionText = styled.p`
  padding-bottom: ${space('4')};
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10%;

  button:first-child {
    margin-right: ${space('4')};
  }
`

const QuestionCard = ({ question, completed, onAnswerQuestion }: CardProps) => (
  <Card>
    <ProgressBarWrapper>
      <ProgressBar completed={completed} />
    </ProgressBarWrapper>

    <Category aria-label="category">{question.category}</Category>

    <DifficultyText aria-label="difficulty">
      Difficulty {question.difficulty}
    </DifficultyText>

    <QuestionText aria-label="question">{question.question}</QuestionText>

    <ButtonsWrapper>
      <Button
        variant="yes"
        onClick={() => completed < 100 && onAnswerQuestion('true')}
      >
        true
      </Button>
      <Button
        variant="no"
        onClick={() => completed < 100 && onAnswerQuestion('false')}
      >
        false
      </Button>
    </ButtonsWrapper>
  </Card>
)

export default QuestionCard
