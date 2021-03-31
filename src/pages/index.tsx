import Page from 'shared/styleguide/components/Page'
import styled from 'styled-components'

import { space, fontSize } from 'shared/styleguide/lib'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: ${space('4')} ${space('4')};
`

const Text = styled.p`
  font-size: ${fontSize('large')};
  text-align: center;

  @media (min-width: 800px) {
    font-size: ${fontSize('2xl')};
  }
`

const Home = () => (
  <Page
    title="Welcome to the Trivia Challenge!"
    navigation={{ text: 'begin', page: 'quiz' }}
  >
    <Wrapper>
      <Text>You will be presented with 10 True of False questions.</Text>

      <Text>Can you score 100?</Text>
    </Wrapper>
  </Page>
)

export default Home
