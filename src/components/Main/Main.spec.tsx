import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderiza o componente
    const { container } = render(
      <Main description="React Avançado" title="teste" />
    )

    // busca o elemento e verifica a existência dele
    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument()

    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main description="teste" title="teste" />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
