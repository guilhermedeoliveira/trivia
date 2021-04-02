import styled from 'styled-components'

import { Right, Wrong } from 'shared/styleguide/components/Icons'

import { AnsweredQuestion } from 'shared/types'
import { isAnswerIncorrect } from 'modules/results/lib/helpers'
import { space } from 'shared/styleguide/lib'

type AnswerProps = {
  answer: AnsweredQuestion
}

const ListItem = styled.li`
  display: flex;
  margin-bottom: ${space('2')};

  @media (min-width: 800px) {
    margin-bottom: ${space('4')};
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const AnswerText = styled.p<{ isIncorrect: boolean }>`
  font-style: ${({ isIncorrect }) => (isIncorrect ? 'italic' : 'normal')};
  font-weight: ${({ isIncorrect }) => (isIncorrect ? 'normal' : 'bold')};
`

const Answer = ({ answer }: AnswerProps) => (
  <ListItem>
    {isAnswerIncorrect(answer) ? <Wrong /> : <Right />}

    <Wrapper>
      <AnswerText isIncorrect={isAnswerIncorrect(answer)}>
        {`${answer.question} (${answer.correctAnswer})`}
      </AnswerText>
    </Wrapper>
  </ListItem>
)

export default Answer
