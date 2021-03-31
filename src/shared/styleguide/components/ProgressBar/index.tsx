import styled from 'styled-components'

import { color, space } from 'shared/styleguide/lib'

type Completed = {
  completed: number
}

type ProgressBarProps = Completed

const Wrapper = styled.div`
  width: ${space('40')};
  height: ${space('4')};
  background-color: ${color('neutral')};
  border-radius: 25px;
  margin-bottom: ${space('12')};
`

const CompletedArea = styled.div<Completed>`
  width: ${({ completed }) => `${completed || 0}%`};
  height: 100%;
  background-color: ${color('primary')};
  border-radius: inherit;
  text-align: right;
  transition: width 0.5s ease-in-out;
`

const LabelText = styled.p`
  padding: ${space('3')};
  color: white;
  font-weight: bold;
  text-align: center;
  color: ${color('primary')};
`

const ProgressBar = ({ completed }: ProgressBarProps) => (
  <Wrapper>
    <CompletedArea completed={completed} />

    <LabelText
      role="progressbar"
      aria-valuenow={completed}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${completed}% completed`}
    >
      {`${completed}%`} completed
    </LabelText>
  </Wrapper>
)

export default ProgressBar
