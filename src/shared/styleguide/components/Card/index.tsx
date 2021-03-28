import React from 'react'
import styled from 'styled-components'

import { color, space } from 'shared/styleguide/lib'

type CardProps = {
  children?: React.ReactNode
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  height: ${space('88')};
  width: 100%;
  border-radius: 15px;
  background-color: ${color('white')};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
  padding: ${space('4')};

  @media (min-width: 800px) {
    width: ${space('196')};
    padding: ${space('8')};
  }

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`

const Card = ({ children }: CardProps) => <Wrapper>{children}</Wrapper>

export default Card
