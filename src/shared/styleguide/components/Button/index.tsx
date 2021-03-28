import React from 'react'
import styled from 'styled-components'

import { color, space } from 'shared/styleguide/lib'

type Variant = {
  variant: 'yes' | 'no'
}

type ButtonProps = {
  onClick: () => void
  children?: React.ReactNode
} & Variant

const StyledButton = styled.button<Variant>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  width: ${space('24')};
  height: ${space('12')};
  background-color: #444;
  color: #fff;
  border-radius: 10px;
  border: none;
  outline: none;

  background-color: ${({ variant }) =>
    variant === 'no' ? color('alert') : color('primary')};

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`

const Button = ({ variant, onClick, children }: ButtonProps) => (
  <StyledButton variant={variant} onClick={onClick}>
    {children}
  </StyledButton>
)

export default Button
