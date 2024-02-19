import StyledComponentsRegistry from './lib/StyledComponentsRegistry'

import { GlobalStyles } from './global'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Styles({ children }: Props) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />

      {children}
    </StyledComponentsRegistry>
  )
}
