import styled from 'styled-components'

const Wrapper = styled.div`
  height: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral};
  border-radius: 25px;
  margin: 50px;
`

const CompletedArea = styled.div`
  width: ${({ completed }) => `${completed || 0}%`};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: inherit;
  text-align: right;
  transition: width 1s ease-in-out;
`

const Label = styled.p`
  padding: 5px;
  color: white;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`

type ProgressBarProps = {
  completed: number
}

const ProgressBar = ({ completed }: ProgressBarProps) => (
  <Wrapper>
    <CompletedArea completed={completed} />

    <Label
      role="progressbar"
      aria-valuenow={completed}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      {`${completed}%`} completed
    </Label>
  </Wrapper>
)

export default ProgressBar
