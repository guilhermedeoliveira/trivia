import styled from 'styled-components'
import { BiCheckCircle } from 'react-icons/bi'
import { VscError } from 'react-icons/vsc'

import { space } from 'shared/styleguide/lib'

const Wrapper = styled.div`
  display: flex;
  padding-right: ${space('2')};
`

export const Right = () => (
  <Wrapper>
    <BiCheckCircle size="1.5em" color="#059669" />
  </Wrapper>
)

export const Wrong = () => (
  <Wrapper>
    <VscError size="1.5em" color="#EF4444" />
  </Wrapper>
)
