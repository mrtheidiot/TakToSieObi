import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Banner from './Banner'

it('checks if the Banner image is visible', () => {
    render(<Banner id={1} />)
  
    const banner = screen.getByRole('img')
    expect(banner).toBeInTheDocument()
  })